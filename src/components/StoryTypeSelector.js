import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  STORIES_NEW,  STORIES_TOP, STORIES_BEST, 
  fetchStoriesIfNeeded, changeStoriesType 
} from '../actions';

export class StoryTypeSelector extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    console.log(value);
    this.props.getStoryType(value);
  }

  render() {
    const types = [
      {
        id: 1,
        type: STORIES_TOP,
        text: 'Top'
      },
      {
        id: 2,
        type: STORIES_NEW,
        text: 'News'
      },
      {
        id: 3,
        type: STORIES_BEST,
        text: 'Best'
      }
    ];
    const buttons = types.map(x => {
      return <button key={x.id} onClick={(e) => this.props.getStoryType(x.type)}>{x.text}</button>
    });
    const options = types.map(x => {
      return <option key={x.id} value={x.type} >{x.text}</option>
    });
    return (
      <div>
        {buttons}
        <div>
          <select onChange={this.onChange}>
            {options}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getStoryType: (storyType) => {
      dispatch(changeStoriesType(storyType));
      dispatch(fetchStoriesIfNeeded(storyType));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryTypeSelector);