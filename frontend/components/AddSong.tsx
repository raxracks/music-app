import { useState, Fragment, useReducer } from "react";

export function AddSong() {
  const [isOpen, setOpen] = useState(false);
  const [artist, setArtist] = useState("");
  const [suggestions, setSuggestions]: any = useState([]);

  let createdName = "";

  const searchArtists = async (value: any) => {
    if (!value || value === ".") return setSuggestions([]);

    setSuggestions(
      await (
        await fetch(
          `http://localhost:4000/v1/artists/search/${encodeURIComponent(value)}`
        )
      ).json()
    );
  };

  const createArtist = async () => {
    const createArtistRes = await fetch("http://localhost:4000/v1/artists", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: artist }),
    });

    const newArtistJSON = await createArtistRes.json();

    createdName = newArtistJSON.name;

    setArtist(newArtistJSON.name);
    setSuggestions([]);
  };

  const chooseSuggestion = (event: any) => {
    setArtist(event.target.innerText);
    setSuggestions([]);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>add a song</button>

      <dialog open={isOpen}>
        <div className="flex">
          <div className="top">
            <div>
              <h3>Add Song</h3>
              <p className="description">
                Choose a name for your song, then list all the artists.
              </p>
            </div>
          </div>
          <div className="bottom">
            {<input className="w-full" placeholder="Song Name" />}

            <input
              placeholder="Artist Name"
              value={artist}
              className="w-full"
              onChange={(event) => {
                setArtist(event.target.value);
                searchArtists(event.target.value);
              }}
            />

            <ul className="suggestions">
              {suggestions.length > 0 ? (
                suggestions.map((suggestion: any, idx: number) => (
                  <li key={idx} onClick={(event) => chooseSuggestion(event)}>
                    {suggestion.name}
                  </li>
                ))
              ) : (
                <></>
              )}

              {artist.length > 0 && !suggestions.includes(artist) ? (
                <li onClick={() => createArtist()}>Create "{artist}"</li>
              ) : (
                <></>
              )}
            </ul>

            <button className="active">Next</button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
