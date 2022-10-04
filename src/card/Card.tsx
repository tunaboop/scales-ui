import React from 'react';
import '../App.css';
import './Card.css';

type CardProps = {
    children: React.ReactNode | React.ReactNode[]
}
function Card(props: CardProps) {
  return (
    <div className="card">
        {props.children}
    </div>
  );
}

export default Card;
