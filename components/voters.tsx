import { useDocument } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase/client"
import { doc } from 'firebase/firestore';
import { VoteType } from "../model/VoteType";

interface Props {
    id: string;
    vote: string;
}

export default function VoterList({ id, vote }: Props) {

    const [value, loading, error] = useDocument(
        doc(firestore, 'users', `${id}`), {}
    );

    if (loading) {
        return <h6>Loading...</h6>;
    }

    if (error) {
        return <p>{JSON.stringify(error)}</p>;
    }

    return (
        <div>
            <img
                style={{
                    borderRadius: "50%",
                    maxHeight: "100px",
                }}
                src={value?.data()?.photoURL}
            />
            <div>
                <h4 style={{ marginBottom: 0 }}>{value?.data()?.displayName}</h4>
                <h4 style={{ marginTop: 0 }}>
                    Voted: {vote === VoteType.YES ? "✔️🍍" : "❌🍍"}
                </h4>
            </div>
        </div>
    );
}