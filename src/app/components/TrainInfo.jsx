import React from 'react';
import { Content } from './Content';
export const TrainInfo = ({ props }) => {
    return (
        <div className="train-info">
            <p>{props.description}</p>
         <div className="train-box" key={props.id}>
            <img src={props.img} alt={props.name} />
            <p>{props.name}</p>
         </div>
        
        </div>
    );
};
