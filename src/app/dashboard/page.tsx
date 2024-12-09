"use client";  
import React, { useState } from "react";
import { Header } from "../components/Header";   
import { Footer } from "../components/Footer";  
import {trainlist}from "./components/trainlist"; 
import './dashboard.css';  

export default function Dashboard() {
  const [my_name] = useState("José Cláudio");
  const [project_name] = useState("Gym Training"); 

  return (
    <div className="dashboard-container">  
      <div className="dashboard-content">  
        <Header my_name={my_name} project_name={project_name} />
        <h1>Dashboard</h1>
        <trainlist />
        <Footer my_name={my_name} project_name={project_name} />
      </div>
    </div>
  );
}
