import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Novità from "./components/Novità";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Row>
          <Col xs={12} md={2} className="p-0">
            {" "}
            <Sidebar />
          </Col>
          <Col xs={12} md={10} className="p-0">
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/novita" element={<Novità />} />
            </Routes>
            <Footer />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;
