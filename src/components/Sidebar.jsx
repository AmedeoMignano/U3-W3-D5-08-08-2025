import { useState } from "react";
import { Form, Button, Container, Nav, Navbar } from "react-bootstrap";
import {
  List,
  HouseDoor,
  ColumnsGap,
  Broadcast,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery, fetchSongs } from "../redux/songsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setQuery(value));
    dispatch(fetchSongs(value));
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* NAVBAR MOBILE */}
      <Navbar expand={false} className="d-md-none px-3 sidebarColor">
        <Container fluid className="d-flex justify-content-between">
          <Button
            variant="outline-light"
            className="border-0"
            onClick={toggleMenu}
          >
            <List className="signIn h5 m-0" />
          </Button>
          <Navbar.Brand className="ms-2">
            <img src="music.svg" alt="logo" />
          </Navbar.Brand>
          <div className="signIn">
            <p className="m-0">Accedi</p>
          </div>
        </Container>
      </Navbar>

      {/* MOBILE MENU A SCORRIMENTO */}
      {isMobileMenuOpen && (
        <div className="d-md-none bg-dark text-white px-3 py-2">
          <Nav className="flex-column">
            <Form className="mb-3">
              <div className="px-3 position-relative">
                {" "}
                <Search className="position-absolute top-0 start-0 mt-2 marginSearch signIn" />
                <Form.Control
                  size="sm"
                  className="bg-dark custom-textarea ps-4 text-white"
                  type="text"
                  placeholder="Cerca"
                  onChange={handleSearch}
                />
              </div>
            </Form>
            <Nav.Link
              as={Link}
              to="/"
              className="text-white d-flex align-items-center"
            >
              <HouseDoor className="signIn me-2" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/novita" className="text-white">
              <ColumnsGap className="signIn me-2" />
              Novità
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              <Broadcast className="signIn me-2" />
              Radio
            </Nav.Link>
          </Nav>
        </div>
      )}

      {/* SIDEBAR DESKTOP */}
      <div className="d-none d-md-block sidebarColor text-white p-3 sidebar h-100">
        <img src="music.svg" alt="logo" className="my-svg px-3" />
        <Nav className="flex-column my-4 vh-100">
          <Form className="mb-3">
            <div className="px-3 position-relative">
              {" "}
              <Search className="position-absolute top-0 start-0 mt-2 marginSearch signIn" />
              <Form.Control
                size="sm"
                className="bg-dark custom-textarea ps-4 text-white"
                type="text"
                placeholder="Cerca"
                onChange={handleSearch}
              />
            </div>
          </Form>
          <Nav.Link
            as={Link}
            to="/"
            className="text-white d-flex align-items-center"
          >
            <HouseDoor className="signIn me-2" /> Home
          </Nav.Link>
          <Nav.Link as={Link} to="/novita" className="text-white">
            <ColumnsGap className="signIn me-2" />
            Novità
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            <Broadcast className="signIn me-2" />
            Radio
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
