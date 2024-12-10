"use client";
import styles from "./page.module.css";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import React, { useState } from "react";
import trainList from "./TrainList.js";

interface Train {
  id: number;
  name: string;
  img: string;
  description: string;
}

export default function Dashboard() {
  const [trains, setTrains] = useState<Train[]>(trainList);
  const [favorites, setFavorites] = useState<number[]>([1, 3, 5]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTrain, setEditTrain] = useState<Train | null>(null);
  const [newTrain, setNewTrain] = useState<Train>({
    id: Date.now(),
    name: "",
    img: "",
    description: "",
  });

  const deleteTrain = (id: number) => {
    setTrains(trains.filter(train => train.id !== id));
    setFavorites(favorites.filter(favId => favId !== id));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };

  const isFavorite = (id: number) => {
    return favorites.includes(id);
  };

  const handleEditClick = (train: Train) => {
    setIsEditing(true);
    setEditTrain(train);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editTrain) {
      const { name, value } = e.target;
      setEditTrain({
        ...editTrain,
        [name]: value
      });
    }
  };

  const handleSaveEdit = () => {
    if (editTrain) {
      setTrains(trains.map(train => 
        train.id === editTrain.id ? editTrain : train
      ));
      setIsEditing(false);
      setEditTrain(null);
    }
  };

  const handleCreateTrain = () => {
    setTrains([...trains, newTrain]);
    setNewTrain({
      id: Date.now(),
      name: "",
      img: "",
      description: "",
    });
  };

  const handleNewTrainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTrain({
      ...newTrain,
      [name]: value
    });
  };

  const my_name = "José Cláudio";
  const project_name = "Gym Training";

  return (
    <div className={styles["dashboard-container"]}>
      <header className={styles.header}>
        <Header my_name={my_name} project_name={project_name}></Header>
      </header>
      <div className={styles["dashboard-content"]}>
        <h2 className={styles.title}>Lista de Treinos</h2>

        <h3>Criar Novo Treino</h3>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome do treino"
            value={newTrain.name}
            onChange={handleNewTrainChange}
          />
          <input
            type="text"
            name="img"
            placeholder="URL da Imagem"
            value={newTrain.img}
            onChange={handleNewTrainChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição do treino"
            value={newTrain.description}
            onChange={handleNewTrainChange}
          />
          <button onClick={handleCreateTrain}>Criar Treino</button>
        </div>

        {isEditing && editTrain ? (
          <div>
            <h3>Editar Treino</h3>
            <form>
              <div>
                <label>Nome</label>
                <input
                  type="text"
                  name="name"
                  value={editTrain.name}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label>Imagem</label>
                <input
                  type="text"
                  name="img"
                  value={editTrain.img}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label>Descrição</label>
                <input
                  type="text"
                  name="description"
                  value={editTrain.description}
                  onChange={handleEditChange}
                />
              </div>
              <button type="button" onClick={handleSaveEdit}>Salvar</button>
            </form>
          </div>
        ) : (
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
                    <button onClick={() => handleEditClick(train)}>Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <footer className={styles.footer}>
        <Footer my_name={my_name} project_name={project_name}></Footer>
      </footer>
    </div>
  );
}
