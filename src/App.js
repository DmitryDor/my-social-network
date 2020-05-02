import React from 'react';
import './App.css';
import Header from "./compoments/Header";
import Navbar from "./compoments/Navbar";
import Profile from "./compoments/Profile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
