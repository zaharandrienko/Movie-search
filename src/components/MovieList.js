import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";
import MovieItem from './MovieItem';

class MovieList extends Component {
    render() {
        let movList  = <div>No Film found</div>; 
        
        if (this.props.movies){
            movList = this.props.movies.map(el =>  <MovieItem key={el.imdbID} movie={el}></MovieItem>);
        }
        return (
            <div>
                {this.props.loading && <h1> LOADING....</h1>}
                <div className="movContainer">
                    {movList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        loading: state.loading,
    };
};

export default connect(
    mapStateToProps
    
)(MovieList);