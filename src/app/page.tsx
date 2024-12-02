import styles from "./page.module.css";
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
//import React, {useState} from "react";


/*function nameData() {
  const [my_name, SetName] = useState<String>()
  return<div>{my_name}</div>
} 

function projectData() {
  const [project_name, SetProject] = useState<String>()
  
  return<div>{project_name}</div> 
}*/

export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
