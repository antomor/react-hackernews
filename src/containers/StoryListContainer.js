import React, { Component } from 'react';
import StoryList from '../components/StoryList';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import StoryTypeSelector from '../components/StoryTypeSelector';

class StoryListContainer extends Component {

  render() {
    const empty = !this.props.items.length > 0;
    const storyList = empty ? <Loading /> : <StoryList items={this.props.items}/>;
    return (
      <div>
        <StoryTypeSelector />
        {storyList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { hackerNewsStories, selectedStoryType } = state;
  const {
    isFetching,
    lastUpdated,
    items
  } = hackerNewsStories[selectedStoryType] || {
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
