import React from 'react';
import { connect } from 'react-redux';
import Tracks from './tracks';
import { setPlay, setPause, setTrack } from '../../actions/player_actions';

const mSTP = state => ({
      currentTrack: state.ui.currentTrack,
      isPlaying: state.ui.playPause.isPlaying,
});

const mDTP = (dispatch) => ({
   setTrack: (track) => dispatch(setTrack(track)),
   setPause: () => dispatch(setPause()),
   setPlay: () => dispatch(setPlay()),
});


export default connect(mSTP, mDTP)(Tracks);