"use client";
import React, { useState } from "react";
import trainList from "../train";

export const TrainList = () => {
    const [trains, setTrains] = useState(trainList);
    const [favorites, setFavorites] = useState([1, 3, 5]);

    const [isEditing, setIsEditing] = useState(false);
    const [currentTrain, setCurrentTrain] = useState(null);

    const deleteTrain = (id) => {
        setTrains(trains.filter((train) => train.id !== id));
        setFavorites(favorites.filter((favId) => favId !== id));
    };

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(id)
                ? prevFavorites.filter((favId) => favId !== id)
                : [...prevFavorites, id]
        );
    };

    const isFavorite = (id) => favorites.includes(id);

    const editTrain = (id, updatedTrain) => {
        setTrains((prevTrains) =>
            prevTrains.map((train) => (train.id === id ? { ...train, ...updatedTrain } : train))
        );
    };

    const openEditModal = (train) => {
        setCurrentTrain(train);
        setIsEditing(true);
    };

    const closeEditModal = () => {
        setIsEditing(false);
        setCurrentTrain(null);
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
                                <button onClick={() => openCreateModal(train)}>Criar</button>
                                <button onClick={() => openEditModal(train)}>Editar</button>
                                <button onClick={() => deleteTrain(train.id)}>Excluir</button>
                                <button onClick={() => toggleFavorite(train.id)}>
                                    {isFavorite(train.id) ? "Remover Favorito" : "Adicionar Favorito"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {isEditing && (
                <div className="modal">
                    <h2>Editar Treino</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            editTrain(currentTrain.id, currentTrain);
                            closeEditModal();
                        }}
                    >
                        <label>
                            Nome:
                            <input
                                type="text"
                                value={currentTrain.name}
                                onChange={(e) =>
                                    setCurrentTrain({ ...currentTrain, name: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Descrição:
                            <input
                                type="text"
                                value={currentTrain.description}
                                onChange={(e) =>
                                    setCurrentTrain({ ...currentTrain, description: e.target.value })
                                }
                            />
                        </label>
                        <label>
                            Imagem (URL):
                            <input
                                type="text"
                                value={currentTrain.img}
                                onChange={(e) =>
                                    setCurrentTrain({ ...currentTrain, img: e.target.value })
                                }
                            />
                        </label>
                        <button type="submit">Salvar</button>
                        <button type="button" onClick={closeEditModal}>
                            Cancelar
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
