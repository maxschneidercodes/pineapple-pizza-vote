import {  firestore } from "../firebase/client"

async function storeVote(userID: string,vote: string) {
    await firestore.collection("votes")
    .doc(userID)
    .set({vote});
}

async function storeUserData(userID: string,user: Object) {
    await firestore.collection("users")
    .doc(userID)
    .set(JSON.parse(JSON.stringify(user)));
}

export { storeVote };
export { storeUserData };
