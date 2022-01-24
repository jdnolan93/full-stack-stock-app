import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const CurrentValuePortfolioChart = ({ shareObject }) => {
  return (
    <div>
     
      <Container style={{ fontSize: "10px",color:"red"}}>
        <Row>
          <Col>{shareObject.name}</Col>
          <Col>{shareObject.symbol}</Col>
          <Col>{shareObject.noOfShares}</Col>
          <Col>{shareObject.noOfShares}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentValuePortfolioChart;
