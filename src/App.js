import React from 'react';
import './App.css';
import Header from "./compoments/Header/Header";
import Navbar from "./compoments/Navbar/Navbar";
import Profile from "./compoments/Profile/Profile";



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
