"use client";
import React, { useState } from "react";
import trainList from "../train"; // Importa a lista de treinos

export const TrainList = () => {
    const [trains, setTrains] = useState(trainList);  // Lista de treinos
    const [favorites, setFavorites] = useState([1, 3, 5]);  // Lista de treinos favoritos

    // Função para excluir um treino
    const deleteTrain = (id) => {
        setTrains(trains.filter(train => train.id !== id));
        setFavorites(favorites.filter(favId => favId !== id));  // Remove dos favoritos, se necessário
    };

    // Função para adicionar/remover treino dos favoritos
    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favId => favId !== id);
            } else {
                return [...prevFavorites, id];
            }
        });
    };

    // Função para verificar se o treino está marcado como favorito
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
                                {/* Botão Excluir */}
                                <button onClick={() => deleteTrain(train.id)}>Excluir</button>
                                
                                {/* Botão Favorito */}
                                <button onClick={() => toggleFavorite(train.id)}>
                                    {isFavorite(train.id) ? "Remover Favorito" : "Adicionar Favorito"}
                                </button>
                                
                                {/* Botão Editar */}
                                <button onClick={() => alert(`Editar treino: ${train.name}`)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
