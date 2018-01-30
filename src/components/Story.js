import React, { Component } from 'react';
import PropTypes from "prop-types";

class Story extends Component {

  render() {
    const item = this.props.item;
    return (
      <li className="story-item">
        <a href={item.url}>{item.title}</a>
      </li>
    );
  }
}

Story.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Story;
