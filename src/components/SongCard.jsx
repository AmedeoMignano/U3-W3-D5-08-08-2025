import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";
import { setCurrentSong } from "../redux/songsSlice";

const SongCard = ({ song }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <Col xs={6} md={2} className="mb-3" onClick={handleClick}>
      <Card className="contentColor" text="white" style={{ cursor: "pointer" }}>
        <Card.Img
          variant="top"
          src={song.album.cover_medium}
          alt={song.title}
        />
        <Card.Body className="p-0">
          <Card.Title className="mb-0 fs-6">{song.title}</Card.Title>
          <Card.Text className="small text-light">{song.artist.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SongCard;
