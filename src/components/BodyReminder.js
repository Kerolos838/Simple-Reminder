import React from "react";
import { Col, Row } from "react-bootstrap";

export default function BodyReminder({ bodyData }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="white-box p-3">
          {bodyData.length ? (
            bodyData.map((item, key) => {
              return (
                <div key={key} className="remin d-flex p-3 border-bottom">
                  <div className="d-flex align-items-center p-2 me-2">
                    <span>{key + 1}</span>
                  </div>
                  <img className="images me-3" src={item.img} alt="Img-01" />
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">You Don't Have Dates Today</h2>
          )}
        </div>
      </Col>
    </Row>
  );
}
