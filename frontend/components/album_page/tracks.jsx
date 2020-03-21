import React from 'react';

class Tracks extends React.Component {
   constructor(props) {
      super(props);
      this.changeTrack = this.changeTrack.bind(this);
      this.renderIcon = this.renderIcon.bind(this);
   }

   changeTrack(e) {
      e.preventDefault(); 
      if (this.props.currentTrack.id === this.props.track.id) {
         if (this.props.isPlaying === true) {
            this.props.setPause(); 
         } else {
            this.props.setPlay(); 
         }
      } else {
         this.props.setTrack(this.props.track); 
         this.props.setPlay(); 
      }
   }

   renderIcon() {
      if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id) {
         return <i className="fas fa-pause playpause-list-icon" />
      } else {
         return <i className="fas fa-play playpause-list-icon" />
      }
   }

   render() {
      const track = this.props.track;
      return (
         <li className="album-track-item">
            <div className="album-track-wrap">
               <span
                  className="album-track-btn"
                  onClick={this.changeTrack}>
                  {this.renderIcon()}
               </span>
               <span className='album-track'>
                  {track.trackNumber}.&nbsp;
               </span>
               <span className='album-track'>
                  {track.title}
               </span>
            </div>
            <div className="album-track-wrap">
               <a
                  className="album-track-dl"
                  href={track.audioUrl}
                  target="_blank"
                  download="test">
                  download
               </a>
            </div>
         </li>
      )
   }

}

export default Tracks
