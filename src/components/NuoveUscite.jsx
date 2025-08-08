import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/songsSlice";
import SongCard from "./SongCard";

const NuoveUscite = () => {
  const dispatch = useDispatch();
  const { songs, query, status } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs(query));
  }, [dispatch, query]);

  return (
    <>
      <h5 className="text-white">
        Nuove uscite <span className="text-secondary">&gt;</span>
      </h5>
      {status === "loading" && <p className="text-white">Caricamento...</p>}
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
};

export default NuoveUscite;
