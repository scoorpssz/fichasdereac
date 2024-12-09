"use client";  
import React, { useState } from "react";
import { Header } from "../components/Header";  
import { Footer } from "../components/Footer";  
import { TrainList } from "./components/trainlist";
import './globals.css';  

export default function Dashboard() {
  const [my_name] = useState<String>("José Cláudio");
  const [project_name] = useState<String>("Gym Training");

  return (
    <div className="dashboard-container">  
      <div className="dashboard-content">  
        <Header my_name={my_name} project_name={project_name}></Header>
        <h1>Dashboard</h1>
        <TrainList></TrainList>
        <Footer my_name={my_name} project_name={project_name}></Footer>
      </div>
    </div>
  );
}
