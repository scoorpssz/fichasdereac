import React from 'react';

export const TrainInfo = ({ description }) => {
    return (
        <div className="train-info">
            <p>{description}</p>
         className="train-box" key={train.id}
        <img src={train.img} alt={train.name} />
        <p>{train.name}</p>
        </div>
    );
};
