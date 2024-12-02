import Image from "next/image";
import styles from "./page.module.css";
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
