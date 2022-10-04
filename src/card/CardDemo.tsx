import React from 'react';
import '../App.css';
import './Card.css';
import Card from "./Card";

function CardDemo() {
  return (
    <div id="Card">
        <Card>
            <div>This is a card.</div>
            <div>Cars are useful for self contained items. They have no defined width (save for a margin) so they will fill whatever space they're in. </div>
        </Card>
    </div>
  );
}

export default CardDemo;
