import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div id='videointro'>
        <div className='video-container'>
          <ModalVideo
            channel="youtube"
            autoplay
            start
            isOpen={this.state.isOpen}
            videoId="joG5hrkQsZw"
            onClose={() => this.setState({ isOpen: false })}
          />
          <div className='video-button-open'>
            <button onClick={this.openModal}>
              <i className='fa fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default videoModal;
