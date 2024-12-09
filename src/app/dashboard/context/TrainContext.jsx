import React, { createContext, useState } from "react";

export const TrainContext = createContext();

const TrainProvider = ({ children }) => {
    const [trains, setTrains] = useState([]); 
    const [log, setLog] = useState([]); 

    const addTrain = (train) => {
        const newTrain = { id: Date.now(), ...train };
        setTrains((prev) => [...prev, newTrain]);
        addLog(`Treino "${newTrain.name}" criado.`);
    };

    
    const editTrain = (id, updatedTrain) => {
        setTrains((prev) =>
            prev.map((train) => (train.id === id ? { ...train, ...updatedTrain } : train))
        );
        addLog(`Treino "${updatedTrain.name}" atualizado.`);
    };

   
    const deleteTrain = (id) => {
        const deletedTrain = trains.find((train) => train.id === id);
        setTrains((prev) => prev.filter((train) => train.id !== id));
        addLog(`Treino "${deletedTrain.name}" apagado.`);
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
