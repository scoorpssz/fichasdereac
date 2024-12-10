"use client";
import { TrainInfo } from './TrainInfo';
import trainList from '../shared/trainList';
import React, { useState, useEffect } from "react";
import Loader from "./Loader"; 

export const Content = (props) => {
    const [ListOfTrain] = useState(trainList);
    const [favoriteTrains, setFavoriteTrains] = useState([1, 3, 5]);

    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const changeFavorite = () => {
        const randomIndex = Math.floor(Math.random() * trainList.length);
        const randomTrainId = trainList[randomIndex].id;
        setFavoriteTrains((prevFavorites) => {
            if (prevFavorites.includes(randomTrainId)) {
                return prevFavorites;
            }
            const newFavorites = [randomTrainId, ...prevFavorites].slice(0, 3);
            return newFavorites;
        });
    };

    if (loading) return <Loader />; 

    return (
        <div>
            <title>Top-3 Treinos Favoritos</title>
            <h1>Top-3 Treinos Favoritos</h1>
            <button onClick={changeFavorite}>Escolher Treino Aleatório</button>
            <div className="training">
                {ListOfTrain.map((props) => {
                    if (favoriteTrains.includes(props.id)) {
                        return (
                            <div className="train-box" key={props.id}>
                                <img src={props.img} alt={props.name} />
                                <p>{props.name}</p>
                                <p>{props.description}</p>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};
