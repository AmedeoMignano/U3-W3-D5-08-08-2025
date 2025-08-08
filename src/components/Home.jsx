import { Button, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home vh-100">
      <Row className="pt-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          {" "}
          <img src="music.svg" alt="Logo" />
          <h1 className="text-white display-1">Discover new music every day</h1>
          <img
            src="https://pngimg.com/d/music_notes_PNG37.png"
            alt=" note"
            width={300}
          />
        </div>
        <p className="text-center text-white mt-3">
          Get playlists and albums inspired by the artists and genres you're{" "}
          <br />
          listening to. 1 month free, then 10.99 $/month
        </p>
        <div className="d-flex justify-content-center">
          <Button variant="light">Try it free</Button>
        </div>
      </Row>
    </Container>
  );
};
export default Home;
