import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreator from "../store/actions/actions";

export default class MovieItem extends Component {
    render() {
        let mov = this.props.movie;
        let st = {
            backgroundImage: "url(" + mov.Poster + ")",
            width: "300px",
            height: "300px"
        }
        
        return (
            <div style={st} > {mov.Title}, {mov.Year} </div>
        )
    }
}

