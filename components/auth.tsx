import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../firebase/client";

const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
    return (
        <div className="card mt-5 pb-5 pt-5 shadow-lg">
            <h1 className="display-2 fw-bold text-center m-4">Pineapple on Pizza?</h1>
            <p className="text-muted mt-4 text-center">Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SignInScreen;