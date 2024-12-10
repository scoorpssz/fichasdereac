import React, { useState, useEffect } from "react";
import { useTrainContext } from "../../context/TrainContext";
import { useRouter } from "next/router";

const FormTrain = () => {
    const { addTrain, editTrain, trains } = useTrainContext();
    const router = useRouter();
    const { id } = router.query;

    const [train, setTrain] = useState({
        name: "",
        img: "",
        description: "",
    });

    useEffect(() => {
        if (id) {
            const foundTrain = trains.find((train) => train.id === id);
            if (foundTrain) {
                setTrain(foundTrain);
            }
        }
    }, [id, trains]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTrain((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            editTrain(id, train);
        } else {
            addTrain(train);
        }
        router.push("/dashboard");
    };

    return (
        <div>
            <h1>{id ? "Editar Treino" : "Adicionar Treino"}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        name="name"
                        value={train.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Imagem (URL)</label>
                    <input
                        type="text"
                        name="img"
                        value={train.img}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Descrição</label>
                    <input
                        type="text"
                        name="description"
                        value={train.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? "Atualizar" : "Adicionar"}</button>
            </form>
            <button onClick={() => router.push("/dashboard")}>Voltar</button>
        </div>
    );
};

export default FormTrain;
