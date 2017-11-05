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

// col-xs-offset-2 col-xs-8 col-sm-4 col-lg-4 col-lg-offset-0
// col-lg-4 col-lg-offset-0 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3
// xs={6} xsOffset={6}

const Main = () => (
  <main>
    <Grid>
      <Row className='show-grid' id="allPlanets">
        <Col xsOffset={3} xs={6} sm={4} smOffset={0} lg={4} lgOffset={0}>
          <span style={allPlanetsStyle} className="investigate allPlanetsSmall"></span>
          <h3>Our Solar System</h3>
          <hr />
          <p>Learn more about the amazing planets in our Solar System</p>
          <Button>Explore</Button>
        </Col>
        <Col xsOffset={3} xs={6} sm={4} smOffset={0} lg={4} lgOffset={0}>
          <span style={mwgalaxyStyle} className="investigate mwgalaxySmall"></span>
          <h3>The Milky Way</h3>
          <hr />
          <p>Come see the wonders the lay in the Milky Way galaxy</p>
          <Button>Explore</Button>
        </Col>
        <Col xsOffset={3} xs={6} sm={4} smOffset={0} lg={4} lgOffset={0}>
          <span style={universeStyle} className="investigate universeSmall"></span>
          <h3>The Universe</h3>
          <hr />
          <p>Learn more about the amazing planets in our Solar System</p>
          <Button>Explore</Button>
        </Col>
      </Row>
    </Grid>
  </main>
)

export default Main;
