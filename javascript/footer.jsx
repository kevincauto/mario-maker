import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
      <Row className="show-grid">
        <Col xs={8} xsOffset={2}>
          <center>
          <h1>Search through a great collection of Super Mario Maker levels!</h1>
            </center>
        </Col>
        <Col xs={6} xsOffset={3}>
          <center>
          <form>
          <input type="text" placeholder="Search"/><br />
          <input type="checkbox" value="Search"/> This is a checkbox <br />
          </form>
            </center>
        </Col>
        <Col xs={6} md={4}>Hello</Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} md={4}>Hello</Col>
        <Col xs={6} md={4}>Hello</Col>
        <Col xsHidden md={4}>Hello</Col>
      </Row>

      <Row className="show-grid">
        <Col xs={6} xsOffset={6}>Hello</Col>
      </Row>

      <Row className="show-grid">
        <Col md={6} mdPush={6}>Hello</Col>
        <Col md={6} mdPull={6}>Hello</Col>
      </Row>
    </Grid>


    );

  }
}
