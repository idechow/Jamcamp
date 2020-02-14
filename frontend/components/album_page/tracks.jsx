import React from 'react';

class Tracks extends React.Component {
   constructor(props) {
      super(props);
      this.changeTrack = this.changeTrack.bind(this);
      this.renderIcon = this.renderIcon.bind(this);
   }

   changeTrack(e) {
      e.preventDefault(); 
      // debugger; 
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
      // debugger; 
      if (this.props.isPlaying && this.props.currentTrack.id === this.props.track.id) {
         return <i className="fas fa-pause playpause-list-icon" />
      } else {
         return <i className="fas fa-play playpause-list-icon" />
      }
   }

   componentDidUpdate(oldProps) {
      // debugger; 
      // if ((this.props.currentTrack.id !== oldProps.currentTrack.id) && !this.props.isPlaying) {
      //    // this.props.setPlayPause();
      //    this.props.setPause();
      // }
   }

   render() {

      const track = this.props.track;
      return (
         <li className="album-track-item">
            <div className="album-track-left">
               <span
                  className="album-track-btn"
                  onClick={this.changeTrack}>
                  {this.renderIcon()}
               </span>
               <span>
                  {track.trackNumber}.&nbsp;
               </span>
               <span>
                  {track.title}
               </span>
               {/* <audio controls>
                  <source src={"https://jamcamp-seed.s3-us-west-1.amazonaws.com/1985-09-07+Red+Rocks+Amphitheatre/gd85-09-07.s1t07.mp3"} type="audio/mp3"></source>
               </audio> */}
            </div>
         </li>
      )
   }

}

export default Tracks
