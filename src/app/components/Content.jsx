"use client"
import { TrainInfo } from './TrainInfo';
import trainList  from '../shared/train';
import React, {useState} from "react";
export const Content = (props) => {
    const [ListOfTrain, setTrainList] = useState(trainList);

    const [favoriteTrains, setFavoriteTrains] = useState([1, 3, 5]);

    const changeFavorite = () => {
        const randomIndex = Math.floor(Math.random() * trainList.length); // Gera um índice aleatório
        const randomTrainId = trainList[randomIndex].id; // Obtém o ID do treino correspondente
        setFavoriteTrains((prevFavorites) => {
            // Atualiza a lista de favoritos, garantindo no máximo 3 itens
            if (prevFavorites.includes(randomTrainId)) {
                return prevFavorites; // Se já está na lista, não faz nada
            }
            const newFavorites = [randomTrainId, ...prevFavorites].slice(0, 3); // Adiciona e limita a 3
            return newFavorites;
        });
    };
    
    return (
        <div>
            <title>Top-3 Treinos Favoritos</title>
            <h1>Top-3 Treinos Favoritos</h1>

            <button onClick={() => changeFavorite()}/>

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
