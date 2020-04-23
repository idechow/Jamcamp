import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import TrackPlayer from './track_player';
import { setPlay, setPause, setTrack } from '../../actions/player_actions';

const mSTP = state => ({
   currentTrack: state.ui.currentTrack,
   isPlaying: state.ui.playPause.isPlaying,
   tracksObj: state.entities.tracks,
});

const mDTP = (dispatch) => ({
   setTrack: (track) => dispatch(setTrack(track)),
   setPause: () => dispatch(setPause()),
   setPlay: () => dispatch(setPlay()),
});


// export default withRouter(connect(mSTP, mDTP)(TrackPlayer));
export default connect(mSTP, mDTP)(TrackPlayer);