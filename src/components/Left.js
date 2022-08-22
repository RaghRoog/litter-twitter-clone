import React, { useState } from "react";
import style from '../style/left.css'

let Left = ({signUserOut,getCurrentState}) => {

    let [display, setDisplay] = useState('none')
    let [currentPage, setCurrentPage] = useState('Main')

    let main = "/imgs/home.png";
    let browse = "imgs/hashtag.png";
    let notifications = "imgs/bell.png";
    let messages = "imgs/message.png";
    let bookmarks = "imgs/bookmark.png";
    let letters = "imgs/letters.png";
    let profile = "imgs/user.png";
    let more = "imgs/more.png";

    switch (currentPage){
        case 'Main':
            main = 'imgs/home-visited.png';
            getCurrentState('Main')
            break;
        case 'Browse':
            browse = 'imgs/hashtag-visited.png';
            getCurrentState('Browse')
            break;
        case 'Notifications':
            notifications = "imgs/bell-visited.png";
            getCurrentState('Notifications')
            break;
        case 'Messages':
            messages = "imgs/message-visited.png";
            getCurrentState('Messages')
            break;
        case 'Bookmarks':
            bookmarks = "imgs/bookmark-visited.png";
            getCurrentState('Bookmarks')
            break;
        case 'Letters':
            letters = "imgs/letters-visited.png";
            getCurrentState('Letters')
            break;
        case 'Profile':
            profile = "imgs/user-visited.png";
            getCurrentState('Profile')
            break;
        case 'More':
            more = "imgs/more-visited.png";
            getCurrentState('More')
            break;
    }

    return(
        <div className="main-left">
            <div className="left-container">
                <img className="main-left-logo" src="imgs/logo.png" alt="logo" />
                <div onClick={()=>setCurrentPage('Main')} className="left-main left-item">
                    <img className="left-img" src={main} alt="main" />
                    Main
                </div>
                <div onClick={()=>setCurrentPage('Browse')} className="left-browse left-item">
                    <img className="left-img" src={browse} alt="browse" />    
                    Browse
                </div>
                <div onClick={()=>setCurrentPage('Notifications')} className="left-notifications left-item">
                    <img className="left-img" src={notifications} alt="notifications" />    
                    Notifications
                </div>
                <div onClick={()=>setCurrentPage('Messages')} className="left-messages left-item">
                    <img  className="left-img" src={messages} alt="messages" />    
                    Messages
                </div>
                <div onClick={()=>setCurrentPage('Bookmarks')} className="left-bookmarks left-item">
                    <img  className="left-img" src={bookmarks} alt="bookmark" />    
                    Bookmarks
                </div>
                <div onClick={()=>setCurrentPage('Letters')} className="left-letters left-item">
                    <img  className="left-img" src={letters} alt="letters" />    
                    Letters
                </div>
                <div onClick={()=>setCurrentPage('Profile')} className="left-profile left-item">
                    <img className="left-img" src={profile} alt="profile" />
                    Profile
                </div>
                <div onClick={()=>setCurrentPage('More')} className="left-more left-item">
                    <img className="left-img" src={more} alt="more" />
                    More                    
                </div>
                <button className="left-tweet-btn">Tweet</button>
                <div onClick={()=>setDisplay('flex')}  className="left-profile-displayer">
                    <img className="profile-img" src={localStorage.getItem('profilePic')} alt="profile imgage" />
                    <div className="profile-name">{localStorage.getItem('name')}</div>
                </div>
            </div>
            <div style={{display: display}} className="log-out-container">
                <button onClick={()=>signUserOut()} className="log-out">Log out</button>
                <img onClick={()=>setDisplay('none')} className="close" src="imgs/close.png" alt="close" />
            </div>
        </div>
    )
}

export default Left;