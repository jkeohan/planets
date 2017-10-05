import React from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import saturnSmall from './saturnSmall.jpeg';
import allPlanetsSmall from './allPlanetsSmall.jpeg';
import mwgalaxySmall from './mwgalaxySmall.jpeg';
import universeSmall from './universeLarge.jpeg';

const allPlanetsStyle = {
  backgroundImage: 'url(' + allPlanetsSmall + ')',
};

const mwgalaxyStyle = {
  backgroundImage: 'url(' + mwgalaxySmall + ')',
};

const universeStyle = {
  backgroundImage: 'url(' + universeSmall + ')',
};



const Main = () => (
  <main>
    <Grid>
      <Row className='show-grid' id="allPlanets">
        <Col sm={4}>
          <span style={allPlanetsStyle} className="allPlanetsSmall"></span>
          <h1>Our Solar System</h1>
          <hr />
          <p>Learn more about the amazing planets in our Solar System</p>
          <Button>Explore</Button>
        </Col>
        <Col sm={4}>
          <span style={mwgalaxyStyle} className="mwgalaxySmall"></span>
          <h1>The Milky Way</h1>
          <hr />
          <p>Beyond Our Solar System</p>
          <Button>Explore</Button>
        </Col>
        <Col sm={4}>
          <span style={universeStyle} className="universeSmall"></span>
          <h1>The Universe</h1>
          <hr />
          <p>Learn more about the amazing planets in our Solar System</p>
          <Button>Explore</Button>
        </Col>
      </Row>
    </Grid>
  </main>
)

export default Main;
