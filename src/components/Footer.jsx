import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="px-4 py-3 footer">
      <Row className="pb-3">
        <div>
          <span className="text-white footerfont me-2">Italia</span>
          <span className="text-secondary footerfont me-2">|</span>
          <span className="text-secondary footerfont">English (UK)</span>
        </div>
      </Row>
      <Row>
        <p className="footerfont text-secondary">
          Copyright © <span>{new Date().getFullYear()}</span>
          <span className="text-white"> Apple Inc. </span>
          Tutti i diritti riservati.
        </p>
      </Row>
      <Row className="pb-3">
        <div>
          <span className="text-white footerfont me-2">
            Condizioni dei servizi internet
          </span>
          <span className="text-secondary footerfont me-2">|</span>
          <span className="text-white footerfont me-2">
            Apple Music e privacy
          </span>
          <span className="text-secondary footerfont me-2">|</span>
          <span className="text-white footerfont me-2">Avviso sui cookie</span>
          <span className="text-secondary footerfont me-2">|</span>
          <span className="text-white footerfont me-2">Supporto</span>
          <span className="text-secondary footerfont me-2">|</span>
          <span className="text-white footerfont me-2">Feedback</span>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
