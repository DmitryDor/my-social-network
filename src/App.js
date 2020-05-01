import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>

            <Header/>
            <Technologes/ >

        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href=' #S'> Home </a>
            <a href=' #S'> News Feed </a>
            <a href=' #S'> Messages </a>

        </div>
    );
}
const Technologes = () => {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    );
}

export default App;
