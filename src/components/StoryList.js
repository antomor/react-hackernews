import React, { Component } from 'react';
import Story from './Story'

class StoryList extends Component {

  render() {
      var items = this.props.items.map(x => {
        return <Story key={x.id} item={x} />
      });
    return (
      <ul className="Story-list">
        {items}
      </ul>
    );
  }
}

export default StoryList;
