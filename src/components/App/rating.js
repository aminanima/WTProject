import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import PropTypes from 'prop-types'
import img1 from '../../stylesheets/img/img1.jpg';
import img2 from '../../stylesheets/img/img2.jpg';
import img3 from '../../stylesheets/img/img3.jpg';
import img4 from '../../stylesheets/img/img6.jpg';
import img5 from '../../stylesheets/img/img5.jpg';
import img6 from '../../stylesheets/img/Unknown.jpg';
Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}
Row.propTypes = {
  noGutters: PropTypes.bool
}
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: PropTypes.array,
}


export default class Rating extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col> <h1> Top 2018 </h1></Col>
        </Row>
      
        <Row>
          <Col xs="6" sm="4"> <img src={img1}/> </Col>
          <Col xs="6" sm="4"><img src={img2}/></Col>
          <Col xs="6" sm="4"><img src={img3}/></Col>
        </Row>
        <p> </p>
        <Row>
          <Col xs="6" sm="4"><img src={img4} width="62%"/> </Col>
          <Col xs="6" sm="4"><img src={img5}/></Col>
          <Col xs="6" sm="4"><img src={img6}/></Col>
        </Row>
      
      </Container>
    );
  }
}