import React from 'react';
import * as TrackApiUtil from '../utils/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';

export const receiveTracks = tracks => ({
   type: RECEIVE_TRACKS,
   tracks,
});

export const receiveTrack = track => ({
   type: RECEIVE_TRACK,
   track,
});

export const fetchTracks = albumId => dispatch => (
   TrackApiUtil.fetchTracks(albumId)
      .then(tracks => dispatch(receiveTracks(tracks)))
);

export const fetchTrack = (albumId, trackNumber) => dispatch => (
   TrackApiUtil.fetchTrack(albumId, trackNumber)
      .then(track => dispatch(receiveTrack(track)))
);