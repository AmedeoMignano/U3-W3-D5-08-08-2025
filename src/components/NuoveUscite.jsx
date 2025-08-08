import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/songsSlice";
import SongCard from "./SongCard";
import { Spinner } from "react-bootstrap";

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
      {status === "loading" && <Spinner animation="border" variant="success" />}
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </>
  );
};

export default NuoveUscite;
