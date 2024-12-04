import React from "react";
import { Content } from "./Content";


const Loader = () => {
    return (
        <div className="loader">
            <img src="/LoadingScreen.gif" alt="A carregar o site." />
        </div>
    );
};

export default Loader;