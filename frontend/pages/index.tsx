import type { NextPage } from "next";
import styles from "../styles/Style.module.css";
import { AddSong } from "../components/AddSong";
import Link from "next/link";

const Home: NextPage = (props: any) => {
  async function search(event: any) {
    const artistSongsResponse = await fetch(
      `http://localhost:4000/api/v1/artists/${event.target.value}/songs`
    );
  }

  return (
    <>
      <title>home</title>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>music app</h1>

          <AddSong />

          <input onChange={search} />
        </main>
      </div>
    </>
  );
};

export default Home;
