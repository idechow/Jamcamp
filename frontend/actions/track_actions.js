import React from 'react';
import * as TrackApiUtil from '../utils/track_api_util';


export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';


export const receiveTracks = tracks => ({
   type: RECEIVE_TRACKS,
   tracks,
});

export const fetchTracks = albumId => dispatch => (
   TrackApiUtil.fetchTracks(albumId)
      .then(tracks => {
         return dispatch(receiveTracks(tracks))
      })
);




// export const RECEIVE_TRACK = 'RECEIVE_TRACK';



// const selectTracks = state => state['tracks'];

// export const receiveTrack = track => ({
//    type: RECEIVE_TRACK,
//    track,
// });

// export const receiveAlbumTracks = tracks => ({
//    type: RECEIVE_TRACKS,
//    tracks,
// });



// export const fetchAlbumTracks = albumId => dispatch => (
//    TrackApiUtil.fetchAlbumTracks(albumId)
//       .then(tracks => { 
//          return dispatch(receiveAlbumTracks(tracks)));
//       })
// );

// export const fetchTrack = (albumId, trackNumber) => dispatch => (
//    TrackApiUtil.fetchTrack(albumId, trackNumber)
//       .then(track => dispatch(receiveTrack(track)))
// );