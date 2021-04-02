import React, { useContext } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../App'
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
function Login() {
    const [loggedUser, setLoggedUser]= useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignin = ()=> {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var user = result.user;
            setLoggedUser({name: user.displayName, email: user.email});
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage);
  });

    }
    return (
        <div className="container">
            <div className="login">
                <h3 className="text-center text-white">Sign in With Google</h3>
                <h1 onClick={handleGoogleSignin} className="login-btn">G</h1>
            </div>
            
        </div>
    )
}

export default Login
