"use client"
import { TrainInfo } from './TrainInfo';
import trainList  from '../shared/train';
import React, {useState} from "react";
export const Content = (props) => {
    const [ListOfTrain, setTrainList] = useState(trainList);

    const [favoriteTrains, setFavoriteTrains] = useState([1, 3, 5]);
    return (
        <div>
            <title>Top-3 Treinos Favoritos</title>
            <h1>Top-3 Treinos Favoritos</h1>

            <div className="training">
                {ListOfTrain.map((props) => {
                    if(favoriteTrains.includes(props.id)){
                    return (
                        <div className="train-box" key={props.id}>
                            <img src={props.img} alt={props.name} />
                            <p>{props.name}</p>
                            <TrainInfo description={props.description} />
                        </div>
                    )
                }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    );
};
