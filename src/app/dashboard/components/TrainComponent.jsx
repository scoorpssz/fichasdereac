"use client";
import React, { useState } from "react";
import trainList from "./TrainList.js"; 

export const TrainListComponent = () => {
    const [trains, setTrains] = useState(trainList);
    const [favorites, setFavorites] = useState([1, 3, 5]);  

    const deleteTrain = (id) => {
        setTrains(trains.filter(train => train.id !== id));  
        setFavorites(favorites.filter(favId => favId !== id));  
    };

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favId => favId !== id);  
            } else {
                return [...prevFavorites, id];  
            }
        });
    };

    const isFavorite = (id) => {
        return favorites.includes(id);  
    };

    return (
        <div>
            <h1>Lista de Treinos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train) => (
                        <tr key={train.id}>
                            <td>{train.id}</td>
                            <td><img src={train.img} alt={train.name} width="50" /></td>
                            <td>{train.name}</td>
                            <td>{train.description}</td>
                            <td>
                                <button onClick={() => deleteTrain(train.id)}>Excluir</button>
                                <button onClick={() => toggleFavorite(train.id)}>
                                    {isFavorite(train.id) ? "Remover Favorito" : "Adicionar Favorito"}
                                </button>
                                <button onClick={() => alert(`Editar treino: ${train.name}`)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
