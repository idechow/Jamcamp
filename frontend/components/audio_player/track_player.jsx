import React from 'react';

class TrackPlayer extends React.Component {
   constructor(props){
      super(props)
      this.audio = React.createRef();
   }

   render(){
      return(
         <div className="track-player-shell">
            <audio controls
               id="audio-player"
               ref={this.audio}
               src={this.props.currentTrack.audioUrl}
               // onLoadedMetadata={this.audioLoaded}
               type="audio/mp3" />
         </div>
      )
   }
};

export default TrackPlayer;