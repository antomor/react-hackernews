import React, { Component } from 'react';
import Story from './Story'

class StoryList extends Component {

  render() {
      var items = this.props.items.map(x => {
          return <Story key={x} item={x} />
      });
    return (
      <div className="Story-list">
        {items}
      </div>
    );
  }
}

export default StoryList;
