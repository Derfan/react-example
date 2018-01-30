import React, { Component } from "react";
import "./VideoPlayer.css";
import Video from "./Video.mp4";

export default class VideoPlayer extends Component {
  state = {};

  handleStart = () => {
    this.video.play();
  };

  handleStop = () => {
    this.video.pause();
  };

  render() {
    return (
      <div className="video-player">
        <video
          ref={c => {
            this.video = c;
          }}
          className="video-player__source"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleStart}>Play</button>
          <button onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    );
  }
}
