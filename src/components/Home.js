import React, { useState } from "react";
import style from '../style/home.css';
import { signInWithGoogle, auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

let Home = ({setIsAuth}) => {

    let navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
              setIsAuth(true)
              const name = result.user.displayName;
              const email = result.user.email;
              const profilePic = result.user.photoURL;
              const userId = result.user.uid;
              localStorage.setItem('userId', userId);
              localStorage.setItem('isAuth', true);
              localStorage.setItem('name', name);
              localStorage.setItem('email', email);
              localStorage.setItem('profilePic', profilePic);
              navigate('/main')
        }).catch((error) => {
            console.log(error);
        });
    };

    return(
        <div className="home">
            <div className="left">
                <div className="left-logo"></div>
            </div>
            <div className="right">
                <div className="heading-container">
                    <div id="home" className="logo"></div>
                    <div className="right-heading">Happening now</div>
                    <div className="right-text">Join Litter today.</div>
                </div>
                <div onClick={signInWithGoogle} className="sign-up">
                    <div className="sign-logo"></div>
                    Sign up with Google</div>
            </div>
            <div className="home-footer">Website created for educational purposes.</div>
        </div>
    )
}

export default Home;