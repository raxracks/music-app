import { useState, Fragment } from "react";

export function AddSong() {
  const [isOpen, setOpen] = useState(false);
  const [artistList, setArtistList]: any = useState([""]);

  // handle input change
  const handleInputChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list: any = [...artistList];
    list[index] = value;
    setArtistList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: any) => {
    const list = [...artistList];
    list.splice(index, 1);
    setArtistList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setArtistList([...artistList, ""]);
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

            {artistList.map((x: any, i: any) => {
              return (
                <Fragment key={i}>
                  <input
                    placeholder="Artist"
                    value={x}
                    className="w-tthird"
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  {artistList.length - 1 === i && (
                    <button onClick={handleAddClick}>+</button>
                  )}
                  {artistList.length !== 1 && (
                    <button onClick={() => handleRemoveClick(i)}>-</button>
                  )}
                </Fragment>
              );
            })}

            <button className="active" onClick={() => console.log(artistList)}>
              Next
            </button>
            <button onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
