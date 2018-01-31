import React, { Component } from 'react';
import PropTypes from "prop-types";

class Story extends Component {

  render() {
    const item = this.props.item;
    const content = item.url ? <a href={item.url}>{item.title}</a> : <span>{item.title}</span>
    return (
      <div className="story-item">
        {content}
      </div>
    );
  }
}

Story.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Story;
