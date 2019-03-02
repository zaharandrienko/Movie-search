import React, { Component } from 'react'

import { connect } from "react-redux";
import MovieItem from './MovieItem';

class MovieList extends Component {
    render() {
        let movList  = <div className="error">No Film found</div>; 
        
        if (this.props.movies){
            movList = this.props.movies.map(el =>  <MovieItem key={el.imdbID} movie={el}></MovieItem>);
        }
        return (
            <div>
                
                <div className="movContainer">
                    {movList}
                    {this.props.loading && <h1 className="load"> LOADING....</h1>}
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