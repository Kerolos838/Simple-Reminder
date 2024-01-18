import React from "react";
import { Col, Row } from "react-bootstrap";

export default function HeadReminder({ headData }) {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <h3>My Reminder is: {headData.length}</h3>
      </Col>
    </Row>
  );
}
