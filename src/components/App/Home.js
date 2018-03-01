import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import PropTypes from 'prop-types'


Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};


export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3"> It's all about movies</h1>
            <p className="lead"> ML based movie suggestion algorithm is HERE </p>
            
          </Container>
        </Jumbotron>
       <form>
          <label>
            Movie Name:
            <input type="text" name="movie" />
          </label>
          <input type="submit" value="Search" />
      </form>
      </div>
    );
  }
};
