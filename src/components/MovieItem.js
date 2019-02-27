import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

export default class MovieItem extends Component {
    render() {
        let mov = this.props.movie;
        let movie = {
            // backgroundColor: "blue",
            // width: "300px",
            height: "550px"
        }
        let photo = {
            backgroundImage: "url(" + mov.Poster + ")",
            width: "300px",
            height: "400px"
        }

        return (
            // <div style={st} > {mov.Title}, {mov.Year} </div>
            <div class="movie" style={movie}>
                <div  style={photo}>
                </div>
                <div class="title">
                    <h2>
                        {mov.Title}
                    </h2>
                    <h3>
                        {mov.Year}
                    </h3>
                </div>
            </div>
        )
    }
}

