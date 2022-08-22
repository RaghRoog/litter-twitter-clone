import { element } from "prop-types";
import React, { useEffect, useState,} from "react";
import style from '../style/main.css'
import Left from './Left.js'
import Right from './Right.js'
import Header from './Header.js'
import Tweet from './Tweet.js'
import { useNavigate } from "react-router-dom";
import { db } from '../firebase-config'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

let Main = ({signUserOut, isAuth}) => {

    let navigate = useNavigate()

    useEffect(() => {
        if(!isAuth){
            navigate('/')
        }
    }, [])

    let [currentPage, setCurrentPage] = useState('Main')
    let getCurrentState = (childData) => {
        setCurrentPage(childData)
    }

    let maxLength = 200
    let [currentLength, setCurrentLength] = useState(0)
    let [labelColor, setLabelColor] = useState('#0c9756')
    let [tweetText, setTweetText] = useState('')

    useEffect(()=> {
        if(currentLength >= 190){
            setLabelColor('red')
        }else if(currentLength <= 190){
            setLabelColor('#0c9756')
        }
    }, [currentLength])

    let tweetsCollectionRef = collection(db, 'tweets')
    let createTweet = async () => {
        await addDoc(tweetsCollectionRef, {tweetText, author: {name: localStorage.getItem('name'), 
        profilePic: localStorage.getItem('profilePic'), userId: localStorage.getItem('userId')}, likes: 0})
    }

    let [tweetsFromFirestor, setTweetsFromFirestore] = useState([])
    useEffect(() => {
        onSnapshot(tweetsCollectionRef, (snapshot) => {
            let tweets = []
            snapshot.docs.forEach((doc) => {
                tweets.push({...doc.data(), id: doc.id})
            })
            setTweetsFromFirestore(tweets)
            console.log(tweets)
        })
    }, [])

    let mainContent = () => {
        switch (currentPage){
            case 'Main':
                return <div className="main-content">
                            <div className="main-tweet-creator">
                                <img className="tweet-author-photo" src={localStorage.getItem('profilePic')} alt="profile-pic" />
                                <div className="tweet-creator-input">
                                    <textarea className="textarea" onChange={(event)=>{
                                        setCurrentLength(event.target.value.length)
                                        setTweetText(event.target.value)
                                    }} placeholder="What's happening?" name="tweet" id="tweet" cols="30" rows="4" maxLength={maxLength} minLength='1'></textarea>
                                    <div className="main-tweet-creator-bottom">
                                        <img src="imgs/add-image.png" alt="add image" className="add-img" />
                                        <div className="progress">
                                            <progress id="text-length" value={currentLength} max={maxLength}></progress>
                                            <label style={{color: labelColor}} htmlFor='text-length'>{currentLength}/{maxLength}</label>
                                        </div>
                                        <button onClick={()=>{
                                            if(tweetText != ''){
                                                createTweet()
                                                let textarea = document.querySelector('.textarea')
                                                textarea.value = ''    
                                                setTweetText('')
                                                setCurrentLength(0)
                                            }
                                        }} className="tweet-creator-btn">Tweet</button>
                                    </div>
                                </div>
                            </div>
                            {tweetsFromFirestor.map((tweet) => {
                                    return <Tweet name={tweet.author.name} profilePic={tweet.author.profilePic} text={tweet.tweetText} id={tweet.id} likes={tweet.likes}/>
                            })}
                       </div>
                break;
            default:
                return <div className="preparation">IN PREPARATION</div>
                break;
        }
    }

    return(
        <div className="main">            
            <Header currentPage={currentPage}/>
            <Left signUserOut={signUserOut} getCurrentState={getCurrentState}/>
            <div className="main-center">
                  {mainContent()}
            </div>            
            <Right/>
        </div>
    )
}

export default Main;