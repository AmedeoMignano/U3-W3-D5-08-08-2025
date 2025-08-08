import { Col } from "react-bootstrap";
import { explorer } from "../constants";
const AltroDaEsplorare = () => {
  return (
    <>
      {explorer.map((item) => {
        return (
          <Col key={item.label} xs={12} md={4} className="mb-3">
            <div className="explorerbg py-3 px-0 d-flex justify-content-between align-items-center explorercard">
              <p className="signIn m-0 ps-2">{item.label}</p>
            </div>
          </Col>
        );
      })}
    </>
  );
};

export default AltroDaEsplorare;
