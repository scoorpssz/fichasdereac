"use client"
import React, { useContext, useEffect, useState } from "react";
import { TrainContext } from "../context/TrainContext";
import { useNavigate, useParams } from "react-router-dom";

const TrainForm = () => {
    const { addTrain, editTrain, trains } = useContext(TrainContext);
    const [train, setTrain] = useState({ name: "", description: "", img: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const existingTrain = trains.find((t) => t.id === parseInt(id));
            if (existingTrain) setTrain(existingTrain);
        }
    }, [id, trains]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            editTrain(parseInt(id), train);
        } else {
            addTrain(train);
        }
        navigate("/");
    };

    return (
        <div>
            <h1>{id ? "Editar Treino" : "Adicionar Novo Treino"}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={train.name}
                        onChange={(e) => setTrain({ ...train, name: e.target.value })}
                    />
                </label>
                <label>
                    Descrição:
                    <input
                        type="text"
                        value={train.description}
                        onChange={(e) =>
                            setTrain({ ...train, description: e.target.value })
                        }
                    />
                </label>
                <label>
                    Imagem (URL):
                    <input
                        type="text"
                        value={train.img}
                        onChange={(e) => setTrain({ ...train, img: e.target.value })}
                    />
                </label>
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => navigate("/")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default TrainForm;
