import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import './main.css';

class SearchComponent extends Component {

  constructor(props) {
    super(props);
 
  }

  getTT = (event) => {

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
      <div class="searchLine">
        <input  type="text" placeholder="Type here to search a movie" onChange={e => this.getTT(e)} />
        <button>Search</button>
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
    getMovies: (name) => {
      if (name.length >= 3) {
        dispatch(actionCreator.getMovies(name))
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(SearchComponent);