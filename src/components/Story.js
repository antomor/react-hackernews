import React, { Component } from 'react';

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

export default Story;
