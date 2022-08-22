import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import style from './style/index.css'
import Home from "./components/Home";
import Main from "./components/Main";
import { auth } from './firebase-config'
import { signOut } from 'firebase/auth'

function App() {

  let [isAuth, setIsAuth] = useState(false)

  let signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear()
        setIsAuth(false)
        window.location.pathname = '/'
      })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setIsAuth={setIsAuth}/>}/>
          <Route path="/main" element={<Main isAuth={isAuth} signUserOut={signUserOut}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
