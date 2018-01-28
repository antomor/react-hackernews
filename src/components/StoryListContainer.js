import React, { Component } from 'react';
import StoryList from './StoryList';
import { connect } from 'react-redux';
import Loading from './Loading';

class StoryListContainer extends Component {

  render() {
    const empty = !this.props.items.length > 0;
    const storyList = empty ? <Loading /> : <StoryList items={this.props.items}/>;
    return (
      <div>
        {storyList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { hackerNewsStories } = state
  const {
    isFetching,
    lastUpdated,
    items
  } = hackerNewsStories.stories || {
    isFetching: true,
    items: []
  }
  return {
    items,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(StoryListContainer);
