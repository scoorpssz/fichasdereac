"use client"
import styles from "./page.module.css";
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import React, {useState} from "react";




export default function Home() {
  const [my_name] = useState<String>("José Cláudio")
  const [project_name] = useState<String>("Gym Training")

  return (
    <div className={styles.page}>
      <Header my_name={my_name} project_name={project_name}></Header>
      <Content></Content>
      <Footer my_name={my_name} project_name={project_name}></Footer>
    </div>
  );
}
