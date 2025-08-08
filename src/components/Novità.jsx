import { Col, Container, Row } from "react-bootstrap";
import NuoviEpisodiRadio from "./NuoviEpisodiRadio";
import NuoveUscite from "./NuoveUscite";
import AltroDaEsplorare from "./AltroDaEsplorare";

const Novità = () => {
  return (
    <Container fluid className="px-4 contentColor pt-5">
      <Row className="mb-4 d-flex">
        <h2 className="text-white">Novità</h2>
        <hr />
        <Col className="pb-2 d-flex flex-column justify-content-between">
          <div>
            {" "}
            <h6 className="text-secondary mb-0">NUOVA STAZIONE RADIO</h6>
            <p className="text-secondary">
              Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill
            </p>
          </div>
          <div>
            {" "}
            <img
              src="1a.png"
              alt="Apple-Chill"
              className="img-fluid imgborder"
            />
          </div>
        </Col>
        <Col className="pb-2 d-flex flex-column justify-content-between">
          <div className="">
            {" "}
            <h6 className="text-secondary mb-0">NUOVA STAZIONE RADIO</h6>
            <p className="text-secondary">
              Ecco la nuova casa della musica latina
            </p>
          </div>
          <div>
            <img
              src="1b.png"
              alt="Apple-Chill"
              className="img-fluid imgborder"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <NuoviEpisodiRadio />
      </Row>
      <Row className="pb-4">
        <NuoveUscite />
      </Row>
      <Row className="pb-3">
        <AltroDaEsplorare />
      </Row>
    </Container>
  );
};

export default Novità;
