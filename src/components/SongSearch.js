import React, { Component } from "react";

export default class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: "",
      artistName: "",
      songInfo: {},
    };
  }

  getSongs = async () => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=e928437a23fd16cc7f4a92e24c210f84&artist=${this.state.artistName}&track=${this.state.songName}`
    );
    const json = await response.json();
    console.log(json);
  };

  render() {
    return (
      <div>
        <h1>Search our library of songs!</h1>
        <input
          placeholder="Type Song Name Here!"
          onChange={(e) => this.setState({ songName: e.target.value })}
          value={this.state.songName}
        ></input>
        <input
          placeholder="Type Artist Name Here!"
          onChange={(e) => this.setState({ artistName: e.target.value })}
          value={this.state.artistName}
        ></input>
        <button onClick={() => this.getSongs()}>Search!</button>
      </div>
    );
  }
}
