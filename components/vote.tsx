import { firebase, firestore } from "../firebase/client"
import Spinner from "../components/spinner";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from 'firebase/firestore';
import { storeVote, storeUserData } from "../firebase/store"
import UserInterface from "../model/User";
import VoterList from "./voters";

enum VoteType {
    YES = "yes",
    NO = "no"
}

export default function Vote(props: { user: UserInterface; }) {

    const [votes, votesLoading, votesError] = useCollection(
        collection(firestore, 'votes'), {}
    );

    async function addVote(vote: string) {
        if (props.user && props.user.uid) {
            storeVote(props.user.uid, vote)
            storeUserData(props.user.uid, props.user)
        }
    }

    if (!props.user || votesLoading) {
        return <Spinner />
    }

    return (<>
        <h1 className="display-1 mb-4 fw-bold ">Pineapple on Pizza?</h1>

        <div className="mb-4 mt-5" style={{ flexDirection: "row", display: "flex" }}>
            <button
                style={{ fontSize: 32, marginRight: 8 }}
                onClick={() => addVote(VoteType.YES)}
            >
                ✔️🍍🍕
            </button>
            <h3>
                Pineapple Lovers:
                {
                    votes?.docs?.filter(
                        (doc) => doc.data().vote === VoteType.YES
                    ).length
                }
            </h3>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
            <button
                style={{ fontSize: 32, marginRight: 8 }}
                onClick={() => addVote(VoteType.NO)}
            >
                ❌🍍🍕
            </button>
            <h3>
                Pineapple Haters:
                {
                    votes?.docs?.filter(
                        (doc) => doc.data().vote === VoteType.NO
                    ).length
                }
            </h3>
        </div>
        <div style={{ marginTop: "64px" }}>
            <h3 className="display-3">Voters:</h3>
            <div
                style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    width: "150px",
                }}
            >
                {votes?.docs?.map((doc) => (
                    <>
                        <VoterList id={doc.id} key={doc.id} vote={doc.data().vote} />
                    </>
                ))}
            </div>
        </div>
    </>)
}