"use client";  

import { Header } from "../components/Header";  
import { Footer } from "../components/Footer";  
import './dashboard.css';  

export default function Dashboard() {
    return (
        <div className="dashboard-container">  
            <div className="dashboard-content">  
                <Header />
                <h1>Dashboard</h1>
                <p>Esta seção está em construção.</p>
                <Footer />
            </div>
        </div>
    );
}
