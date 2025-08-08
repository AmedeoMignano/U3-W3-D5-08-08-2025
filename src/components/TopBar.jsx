import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  Shuffle,
  SkipBackwardFill,
  SkipForwardFill,
  PlayFill,
  Repeat,
  VolumeUpFill,
  Person,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const TopBar = () => {
  const currentSong = useSelector((state) => state.songs.currentSong);
  return (
    <Container fluid className="topbarColor d-none d-md-block">
      <Row className=" d-flex align-items-center toph">
        <Col lg={3} className="d-none d-lg-block px-4">
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            <Shuffle className="icontop h4 me-2 mb-0" />
            <SkipBackwardFill className="icontop h4 me-2 mb-0" />
            <PlayFill className="icontop h2 me-2 mb-0" />
            <SkipForwardFill className="icontop h4 me-2 mb-0" />
            <Repeat className="icontop h4 mb-0" />
          </div>
        </Col>
        <Col
          md={12}
          lg={6}
          className="icondiv h-100 d-flex justify-content-center align-items-center"
        >
          {currentSong ? (
            <div className="d-flex align-items-center gap-3">
              <img
                src={currentSong.album.cover_small}
                alt={currentSong.title}
                style={{ height: "50px", width: "50px" }}
              />
              <div>
                <h6 className="text-white m-0">{currentSong.title}</h6>
                <p className="text-secondary m-0">{currentSong.artist.name}</p>
              </div>
            </div>
          ) : (
            <img src="apple.svg" alt="" />
          )}
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center">
              <VolumeUpFill className="icontop me-1" />
              <div className="d-flex">
                <input
                  type="range"
                  className="form-range"
                  id="customRange3"
                ></input>
              </div>
            </div>
            <div>
              <Button variant="danger" className="d-flex align-items-center">
                <Person className="me-2" />
                Accedi
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
