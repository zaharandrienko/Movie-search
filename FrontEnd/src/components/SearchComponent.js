import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import './main.css';

class SearchComponent extends Component {

  constructor(props) {
    super(props);
  }

  search = (event) => {

    if (this.timer) {
      clearTimeout(this.timer);
    }

    let val = event.target.value;
    this.timer = setTimeout(() => {
      this.props.getMovies(val)
    }, 300)

  }

  render() {
    return (
      <div className="searchLine">
        <input  type="text" placeholder="Type here to search a movie" onChange={e => this.search(e)} />
        <button >Store</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   
  };  
};

const mapDispachToProps = (dispatch) => {
  return {
    getMovies: (searchText) => {
      if (searchText.length >= 3) {
        dispatch(actionCreator.getMovies(searchText))
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(SearchComponent);