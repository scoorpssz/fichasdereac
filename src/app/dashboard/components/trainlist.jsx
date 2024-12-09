import React, { useContext } from "react";
import { TrainContext } from "../context/TrainContext";
import { Link } from "react-router-dom";

const trainlist = () => {
    
    const { trains, deleteTrain, log } = useContext(TrainContext);

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
                            <td>
                                <img src={train.img} alt={train.name} width="50" />
                            </td>
                            <td>{train.name}</td>
                            <td>{train.description}</td>
                            <td>
                               
                                <button onClick={() => deleteTrain(train.id)}>Excluir</button>

                                
                                <Link to={`/edit/${train.id}`}>
                                    <button>Editar</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
            <Link to="/add">
                <button>Adicionar Novo Treino</button>
            </Link>

            <h2>Histórico de Ações</h2>
            <ul>
                {log.map((entry, index) => (
                    <li key={index}>
                        [{new Date(entry.timestamp).toLocaleString()}] {entry.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default trainlist;s