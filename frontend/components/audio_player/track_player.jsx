import React from 'react';
import { isEmpty } from 'lodash';

class TrackPlayer extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         queue: Object.values(this.props.tracks),
         audioLoaded: false
      }
      this.audio = React.createRef();
      this.handlePlay = this.handlePlay.bind(this);
      this.audioLoaded = this.audioLoaded.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
   }

   componentDidMount() {
      if (_.isEmpty(this.props.currentTrack)) {
         this.props.setTrack(this.state.queue[0]);
      }
   }

   componentDidUpdate(prevProps) {
      if (this.props.isPlaying) {
         this.audio.current.play();
      } else {
         this.audio.current.pause();
      }
   }

   componentWillUnmount() {
      this.props.setTrack();
      this.props.setPause();
   }

   toggleIcon() {
      if (this.props.isPlaying){
         return <i className="fas fa-pause playpause-icon" />
      } else {
         return <i className="fas fa-play playpause-icon" />
      }
   }

   handlePlay() {
      if(this.props.isPlaying) {
         this.audio.current.pause();
         this.props.setPause();
      } else {
         this.audio.current.play();
         this.props.setPlay();
      }
   }

   audioLoaded() {
      this.setState({ audioLoaded: true });
   }

   changeTrack(diff) {
      const nextTrack = this.props.currentTrack.trackNumber + diff;
      this.props.setTrack(this.state.queue[nextTrack]);
   }

   handleEnd(e) {
      if (this.props.currentTrack.trackNumber >= this.state.queue.length) {
         this.props.setTrack(this.state.queue[0]);
         this.props.setPause();
      } else {
         // this works bc the current tracknumber is always going to be one more than the its idx in the queue
         this.changeTrack(0);
         // this.props.setTrack(this.state.queue[this.props.currentTrack.trackNumber]);
      }
   }

   render(){
      const backDisabled = (this.props.currentTrack.trackNumber === 1) ? true : false;
      const frwdDisabled = (this.props.currentTrack.trackNumber === (this.state.queue.length)) ? true : false;
      return(
         <div className="track-player-shell">
            <audio controls
               id="audio-player"
               ref={this.audio}
               src={this.props.currentTrack.audioUrl}
               onLoadedMetadata={this.audioLoaded}
               type="audio/mp3" 
               onEnded={ this.handleEnd }
               />

            <div className="player-controls">
               <button 
                  className="play-pause-btn"
                  onClick={this.handlePlay}>
                     {this.toggleIcon()}
                  </button>
               <div className="player-top">
                  <span className="track-player-title">
                     {this.props.currentTrack.title}
                  </span>
                  <span className="track-player-time">
                     {this.state.audioLoaded ? "00:00 / 00:00" : "Loading"}
                  </span>
               </div>
               <div className="player-bottom">
                  <div className="progress-bar"></div>
                  <div className="progress-slider"></div>
                  <button 
                     className="backward-btn"
                     onClick={() => this.changeTrack(-2)}
                     disabled={backDisabled}>
                     <i className="fas fa-fast-backward"></i>
                  </button>
                  <button 
                     className="forward-btn"
                     onClick={() => this.changeTrack(0)}
                     disabled={frwdDisabled}>
                     <i className="fas fa-fast-forward"></i>
                  </button>
               </div>
            </div>
         </div>
      )
   }
};

export default TrackPlayer;