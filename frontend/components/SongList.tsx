import Link from "next/link";

export function SongList(props: any) {
  return (
    <div>
      {props.songs.map((song: any, key: number) => (
        <div key={key}>
          <Link href={`/songs/${song.id}`}>{song.name}</Link>
          {" - "}
          <Link href={`/artists/${song.artist.id}`}>{song.artist.name}</Link>
        </div>
      ))}
    </div>
  );
}
