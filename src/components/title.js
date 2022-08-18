/* eslint-disable react/prop-types */
import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="App">{headline}</h2>
    );
  }
}

export default Title;
