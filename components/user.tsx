import UserInterface from "../interfaces/UserInterface"

export default function User(props: { user: UserInterface }) {
    if (props.user) {
        return <div className="">
            <p>{props.user.displayName}</p>
        </div>
    }
    return <></>
}