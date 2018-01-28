import React, { Component } from 'react';

class Story extends Component {

  render() {
      const item = this.props.item;
    return (
      <div className="Story-item">
        {item}
      </div>
    );
  }
}

export default Story;
