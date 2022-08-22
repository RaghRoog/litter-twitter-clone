import React, { useState } from "react";
import style from '../style/header.css'

let Header = ({currentPage}) => {

    return(
        <div className="header">
            <div className="page-indicator">{currentPage}</div>
            <form>
                <img className="magnify" src="imgs/magnify.svg" alt="magnify" />
                <input id="search" name="search" className="search" type="search" placeholder="Litter search engine"/>
            </form>
        </div>
    )
}

export default Header;