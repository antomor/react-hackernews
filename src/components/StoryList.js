import React, { Component } from 'react';
import Story from './Story';
import PropTypes from "prop-types";

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

StoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }))
}


export default StoryList;
