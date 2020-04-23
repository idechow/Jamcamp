import React from 'react';
import * as ArtistApiUtil from '../utils/artist_api_util';

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const CLEAR_ARTISTS = 'CLEAR_ARTIST';

export const receiveArtist = artist => {
   return {
      type: RECEIVE_ARTIST,
      artist
   };
};

export const clearArtists = () => ({
   type: CLEAR_ARTISTS,
});

export const fetchArtist = bandId => dispatch => (
   ArtistApiUtil.fetchArtist(bandId)
      .then(artist => dispatch(receiveArtist(artist)))
);

export const updateArtist = (userId, data) => dispatch => (
   ArtistApiUtil.updateArtist(userId, data)
      .then(artist => dispatch(receiveArtist(artist)))
);