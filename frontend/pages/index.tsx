import type { NextPage } from "next";
import styles from "../styles/Style.module.css";
import { AddSong } from "../components/AddSong";
import { useState } from "react";
import { SongList } from "../components/SongList";

// export async function getServerSideProps(context: any) {

// }

const Home: NextPage = (props: any) => {
  const [searchResults, setSearchResults] = useState([]);

  async function search(event: any) {
    const value = encodeURIComponent(event.target.value);

    if (!value || value.trim() === ".") return setSearchResults([]);

    try {
      const artistSongsResponse = await fetch(
        `http://localhost:4000/v1/songs/search/${value}`
      );

      setSearchResults(await artistSongsResponse.json());
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <title>home</title>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>music app</h1>

          <AddSong />

          <br />

          <input onChange={search} />

          <SongList songs={searchResults} />
        </main>
      </div>
    </>
  );
};

export default Home;
