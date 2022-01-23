import React from "react";
import CurrentValuePortfolioChart from "./CurrentValuePortfolioChart";
import { Container, Col, Row } from "react-bootstrap";


const TotalValue = ({shareObjects}) => {


  const nameNode = shareObjects.map( shareObject =>{
    return (
      <CurrentValuePortfolioChart
        shareObject={shareObject}
        key={shareObject._id}
      />
    );} )


  return (
    <div>
      <h3>this is total value component</h3>
      <hr />
      <div>
        <h1>portfolio charts</h1>
        <Container style={{ fontSize: "10px"} }>
          <Row >
            <Col>name:</Col>
            <Col>symbol:</Col>
            <Col>noOfShares:</Col>
            <Col>current Value:</Col>
          </Row>
        </Container>

        <h2>{nameNode}</h2>
        <hr />
      </div>
    </div>
  );
};

export default TotalValue;
