/* eslint-disable react/prop-types */
import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="App">{headline}</h2>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: propTypes.string.isRequired,
};
