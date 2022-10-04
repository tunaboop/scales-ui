import React from 'react';
import '../App.css';
import './Demo.css';
import CardDemo from "../card/CardDemo";

function DemoScreen() {
  return (
    <div className="demo-screen">
        <h1>Scales-UI</h1>
        <div className="about-project">We are working on creating a component library and since we're not doing anything too groundbreaking, we've decided to do it open source.</div>
        <CardDemo/>
    </div>
  );
}

export default DemoScreen;
