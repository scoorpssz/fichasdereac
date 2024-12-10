import React, { createContext, useState } from "react";
import { TrainList }from "../shared/trainList";

export const TrainContext = createContext();

const TrainProvider = ({ children }) => {
    const [trains, setTrains] = useState(TrainList);
    const [log, setLog] = useState([]);

    const addTrain = (train) => {
        const newTrain = { id: Date.now(), ...train };
        setTrains((prev) => [...prev, newTrain]);
        addLog(`Trem "${newTrain.name}" criado.`);
    };

    const editTrain = (id, updatedTrain) => {
        setTrains((prev) =>
            prev.map((train) => (train.id === id ? { ...train, ...updatedTrain } : train))
        );
        addLog(`Trem "${updatedTrain.name}" atualizado.`);
    };

    const deleteTrain = (id) => {
        setTrains((prev) => prev.filter((train) => train.id !== id));
        addLog(`Trem com ID: ${id} apagado.`);
    };

    const addLog = (message) => {
        setLog((prev) => [...prev, { message, timestamp: new Date().toISOString() }]);
    };

    return (
        <TrainContext.Provider
            value={{
                trains,
                addTrain,
                editTrain,
                deleteTrain,
                log,
            }}
        >
            {children}
        </TrainContext.Provider>
    );
};

export default TrainProvider;
