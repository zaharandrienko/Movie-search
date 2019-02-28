import React, { Component } from 'react'

export default class MovieItem extends Component {
    render() {
        let mov = this.props.movie;
      
        let photo = {
            backgroundImage: "url(" + mov.Poster + ")",
        }

        return (
            <div class="movie" style={movie}>
                <div className="photo" style={photo}>
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

