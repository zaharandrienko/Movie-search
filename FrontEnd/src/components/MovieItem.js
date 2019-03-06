import React, { Component } from 'react'

export default class MovieItem extends Component {
    render() {
        let mov = this.props.movie;

        let photo = {
            backgroundImage: "url(" + mov.Poster + ")" 
        }

        return (
            <div className="movie" >
                <div className="photo" style={photo} >
                </div>
                <div className="title">
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

