import React from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import saturnSmall from './saturnSmall.jpeg';
import allPlanetsSmall from './allPlanetsSmall.jpeg';

const divStyle = {
  backgroundImage: 'url(' + allPlanetsSmall + ')',
};

const Main = () => (
  <main>
    <Grid>
      <Row className='show-grid' id="allPlanets">
        <Col sm={4}>
          <span style={divStyle} className="allPlanetsSmall"></span>
          <h1>Our Planets</h1>
          <hr />
          <p>Learn more about the amazing planets in our Solar System</p>
        </Col>
        <Col sm={4}>
          <h1>The Milky Way</h1>
          <p>Info</p>
        </Col>
        <Col sm={4}>
          <h1>The Universe</h1>
          <p>Info</p>
        </Col>
      </Row>
    </Grid>
  </main>
)

export default Main;
