import React, { useState } from 'react'
import style from '../style/main.css'
import {db} from '../firebase-config'
import { doc, updateDoc } from 'firebase/firestore'

let Tweet = ({name, profilePic, text, id, likes}) => {

    const docRef = doc(db, 'tweets', id)

    let [clicked, setCLicked] = useState(false)
    let [likeImg, setLikeImg] = useState("imgs/heart.png")

    return (
        <div className="tweet">
            <img className="tweet-author-img" src={profilePic} alt="author image" />
            <div className="tweet-content">
                <div className="tweet-author-name">{name}</div>
                {text}
            </div>
            <div className="tweet-bottom">
                <div className="like">
                    <img onClick={() => {
                        if(!clicked){
                            updateDoc(docRef, {
                                likes: likes + 1
                            })
                            setCLicked(true)
                            setLikeImg("imgs/heart-clicked.png")
                        }else if(clicked && likes > 0){
                            updateDoc(docRef, {
                                likes: likes - 1
                            })
                            setCLicked(false)
                            setLikeImg("imgs/heart.png")
                        }
                    }}  className="like-icon" src={likeImg} alt="like icon" />
                    <div className="like-counet">{likes}</div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;