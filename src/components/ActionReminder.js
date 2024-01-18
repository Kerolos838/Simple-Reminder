import React from "react";
import { Col, Row, Button } from "react-bootstrap";

export default function ActionReminder({ deleteData, showdata }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="d-flex justify-content-between mt-2">
        <Button onClick={showdata}>Show Data</Button>
        <Button onClick={deleteData} variant="danger">
          Hidden Data
        </Button>
      </Col>
    </Row>
  );
}
