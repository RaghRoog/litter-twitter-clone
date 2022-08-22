import React, {useState} from "react";
import style from '../style/right.css'

let Right = () => {
    
    let [clicked, setClicked] = useState(false)

    let popularArray = ['Bayern','Lewandowski','Odra','Casemiro','Nie','wiem','co','tutaj','wpisac','To na szczęście ostatnie']
    let worthWatching = ['Elon Musk','Robert Lewandowski','Fc Bayern']
    
    return(
        <div className="main-right">
            <div className="popular-container">
                <div className="right-title">Most popular for you</div>
                    {popularArray.map((element)=>{
                        return <div className="popular-item">{element}</div>  
                    })}
            </div>
            <div className="worth-watching">
                    <div className="right-title">Worth watching</div>
                    {worthWatching.map((element)=>{
                        return <div className="worth-watching-item">
                            <img src="imgs/img-placeholder.png" alt="profile-pic" className="ww-image"/>
                            <div className="ww-name">{element}</div>
                            <button onClick={(event)=>{
                                if(!clicked){
                                    event.target.style.backgroundColor='white'
                                    event.target.style.border='1px solid red'
                                    event.target.style.color='black'
                                    event.target.style.width='85%'
                                    setClicked(true)
                                }if(clicked){
                                    event.target.style.backgroundColor='black'
                                    event.target.style.border='0'
                                    event.target.style.color='white'
                                    event.target.style.width='90px'
                                    setClicked(false)
                                }
                            }} className="watch-btn">Watch</button>
                        </div>  
                    })}
            </div>
        </div>
    )
}

export default Right;