import React, { Component } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import MovieList from "./components/MovieList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchComponent />
       <MovieList/>
      </div>
    );
  }
}