import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  STORIES_NEW,  STORIES_TOP, STORIES_BEST, 
  fetchStoriesIfNeeded, changeStoriesType 
} from '../actions';

class StoryTypeSelector extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.getTop}>Top</button>
        <button onClick={this.props.getNews}>News</button>
        <button onClick={this.props.getBest}>Best</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getTop: () => {
      dispatch(changeStoriesType(STORIES_TOP));
      dispatch(fetchStoriesIfNeeded(STORIES_TOP));
    },
    getNews: () => {
      dispatch(changeStoriesType(STORIES_NEW));
      dispatch(fetchStoriesIfNeeded(STORIES_NEW));
    },
    getBest: () => {
      dispatch(changeStoriesType(STORIES_BEST));
      dispatch(fetchStoriesIfNeeded(STORIES_BEST));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryTypeSelector);