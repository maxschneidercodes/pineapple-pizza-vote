import SignInScreen from "../components/auth"
import firebase from "../firebase/client"
import { useEffect, useState } from "react";
import User from "../components/user";
import UserInterface from "../interfaces/UserInterface";
import Spinner from "../components/spinner";

export default function Home() {
  //const firestore = firebase.firestore()
  const [getUser, setUser] = useState<UserInterface>()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user && user.displayName) {
        setUser({ displayName: user.displayName })
      }
    });

    return () => { }
  }, [])

  if (!getUser) {
    return <Spinner />
  }

  return (
    getUser ? <User user={getUser} /> : <SignInScreen />
  )
}
