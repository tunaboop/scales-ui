import React from 'react';
import './App.css';
import DemoScreen from "./demo/DemoScreen";
import Sidebar from "./sidebar/Sidebar";

function App() {
    const componentsArr = ['Card'];
    const Components = () => {
        return(
            <ul>
                {componentsArr.map((component, index) => {
                    return <li key={index}><a href={`#${component}`}>{component}</a></li>
                })}
            </ul>
        )
    }
    return (
        <div className="App">
            <Sidebar>
                <Components/>
            </Sidebar>
            <DemoScreen/>
        </div>
    );
}

export default App;
