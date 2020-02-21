import React from 'react';
import { isEmpty } from 'lodash';

class TrackPlayer extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         sliderPos: 0,
         bufferWidth: 0,
         audioLoaded: false,
      }
      this.audio = React.createRef();
      this.progbar = React.createRef();
      this.slider = React.createRef();
      this.handlePlay = this.handlePlay.bind(this);
      this.audioLoaded = this.audioLoaded.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
      this.updatePos = this.updatePos.bind(this);

      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleMouseDown = this.handleMouseDown.bind(this);
   }

   componentDidMount() {
      if (_.isEmpty(this.props.currentTrack)) {
         this.props.setTrack(this.props.tracks[0]);
      }
   }

   componentDidUpdate(prevProps) {
      if (this.props.isPlaying) {
         this.audio.current.play();
      } else {
         this.audio.current.pause();
      }

      if (this.props.tracksObj !== prevProps.tracksObj) {
         this.props.setTrack(this.props.tracks[0]);
         this.props.setPause();
      }

      if (this.props.isPlaying !== prevProps.isPlaying){
         if (this.props.isPlaying) {
            this.intervalId = setInterval(() => this.updatePos(), 300);
         } else {
            clearInterval(this.intervalId);
         }
      }

      if (this.props.currentTrack !== prevProps.currentTrack) {
         clearInterval(this.intervalId);
         this.setState({ audioLoaded: false, sliderPos: 0, bufferWidth: 0});
      }
   }

   componentWillUnmount() {
      this.props.setTrack();
      this.props.setPause();
      clearInterval( this.intervalId );
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
         clearInterval( this.intervalId );
      } else {
         this.audio.current.play();
         this.props.setPlay();
      }
   }

   updatePos() {
      if (this.audio.current && this.audio.current.buffered.length) {
         const progWidth = this.progbar.current.offsetWidth - (this.slider.current.offsetWidth);
         const progRatio = progWidth * (this.audio.current.currentTime / this.audio.current.duration);
         let buff = this.audio.current.buffered.length
         const progBuffer = progWidth * (this.audio.current.buffered.end(buff - 1) / this.audio.current.duration);
         const progSlider = Math.round(progRatio);
         this.setState({ sliderPos: progSlider, bufferWidth: progBuffer });
      }
   }

   audioLoaded() {
      this.setState({ audioLoaded: true }, () => {
         if (this.props.isPlaying) this.intervalId = setInterval(() => this.updatePos(), 300);
      })
   }

   changeTrack(num) {
      const nextTrack = this.props.currentTrack.trackNumber + num;
      this.props.setTrack(this.props.tracks[nextTrack]);
   }

   handleEnd() {
      if (this.props.currentTrack.trackNumber >= this.props.tracks.length) {
         this.props.setTrack(this.props.tracks[0]);
         this.props.setPause();
      } else {
         this.changeTrack(0);
      }
   }

   handleTime() {
      let current = Math.round(this.audio.current.currentTime);
      let duration = Math.round(this.audio.current.duration);
      this.duration = duration;

      let cSec = current % 60;
      if (cSec < 10) cSec = `0${cSec}`;

      let cMin = Math.floor(current / 60);
      if (cMin < 10) cMin = `0${cMin}`;

      let dSec = duration % 60;
      if (dSec < 10) dSec = `0${dSec}`;

      let dMin = Math.floor(duration / 60);
      if (dMin < 10) dMin = `0${dMin}`;
      
      return `${cMin}:${cSec} / ${dMin}:${dSec}`
   }

   handleMouseMove(e) {
      let box = this.progbar.current.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      let clientLeft = docEl.clientLeft || body.clientLeft || 0;
      let left = Math.round(box.left + scrollLeft - clientLeft);

      if (e.pageX > left + 237){
         this.x = this.audio.current.duration - 1;
      } else {
         this.x = ((e.pageX - left-12) / 226) * this.audio.current.duration;
      }
      
      this.audio.current.currentTime = this.x;
   }

   handleMouseDown(e) {
      this.audio.current.muted = true
      this.intervalSlide = setInterval(() => this.updatePos(), 30);
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.handleMouseUp);
   }

   handleMouseUp(e) {
      this.audio.current.muted = false
      clearInterval(this.intervalSlide);
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.handleMouseUp);
   }

   render(){
      const backDisabled = (this.props.currentTrack.trackNumber === 1) ? true : false;
      const frwdDisabled = (this.props.currentTrack.trackNumber === (this.props.tracks.length)) ? true : false;
      return(
         <div className="track-player-shell">
            <audio
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
               <div className="player-right">
                  <div className="player-top">
                     <span className="track-player-title">
                        {this.props.currentTrack.title}
                     </span>
                     <span className="track-player-time">
                        {this.state.audioLoaded ?  this.handleTime() : "00:00 / 00:00"}
                     </span>
                  </div>
                  <div className="player-bottom">
                     {/* <div className="progress-bar-wrap"> */}
                        <div 
                           className="progress-bar"
                           ref={this.progbar}
                        />
                        <div 
                           className="progress-slider"
                           ref={this.slider}
                           onMouseDown={this.handleMouseDown}
                           style={{ left: this.state.sliderPos || 0 }}
                        />
                        <div 
                           className="progress-buffer"
                           ref={this.buffer}
                           style={{ width: this.state.bufferWidth || 0 }}
                        />
                     {/* </div> */}
                     <button 
                        className="prev-next-btn"
                        onClick={() => this.changeTrack(-2)}
                        disabled={backDisabled}>
                        <i className="fas fa-fast-backward"></i>
                     </button>
                     <button 
                        className="prev-next-btn"
                        onClick={() => this.changeTrack(0)}
                        disabled={frwdDisabled}>
                        <i className="fas fa-fast-forward"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )
   }
};

export default TrackPlayer;