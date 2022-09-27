import React from 'react';
import './App.css';
import DemoScreen from "./demo/DemoScreen";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <DemoScreen/>
    </div>
  );
}

export default App;
