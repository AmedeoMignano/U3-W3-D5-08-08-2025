import { Col } from "react-bootstrap";

const NuoviEpisodiRadio = () => {
  return (
    <>
      <h5 className="text-white">Nuovi episodi radio</h5>
      <Col xs={4} lg={2}>
        <img src="2a.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">Prologo con Abuelo</p>
      </Col>
      <Col xs={4} lg={2}>
        {" "}
        <img src="2b.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">The Wanderer</p>
      </Col>
      <Col xs={4} lg={2}>
        {" "}
        <img src="2c.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">Michael Bublé & Carly Pearce</p>
      </Col>
      <Col lg={2} className="d-none d-lg-block">
        {" "}
        <img src="2d.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">
          Stephan Moccio: The Zane Lowe Interview
        </p>
      </Col>
      <Col lg={2} className="d-none d-lg-block">
        {" "}
        <img src="2e.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">Chart Spotlight: Julia Michaels</p>
      </Col>
      <Col lg={2} className="d-none d-lg-block">
        {" "}
        <img src="2f.png" alt="playlist" className="img-fluid imgborder" />
        <p className="text-secondary">Karri & Travis Mills</p>
      </Col>
    </>
  );
};

export default NuoviEpisodiRadio;
