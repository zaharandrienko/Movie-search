import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

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
      <div >
        <input onChange={e => this.getTT(e)} />
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