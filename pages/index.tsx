import SignInScreen from "../components/auth"
import { useEffect, useState } from "react";
import UserInterface from "../data/UserInterface";
import { firebase, firestore } from "../firebase/client"
import Vote from "../components/vote";

export default function Home() {

  const [getUser, setUser] = useState<UserInterface>()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.displayName && user.photoURL) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        })
      }
    });
  }, [])

  return (<div
    style={{
      display: "flex",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gridGap: 8,
      background:
        "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    }}
  >
    {getUser ? <>
      <Vote user={getUser} />
    </> : <SignInScreen />}
  </div>
  )
}
