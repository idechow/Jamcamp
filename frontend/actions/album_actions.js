import React from 'react';
import * as AlbumApiUtil from '../utils/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
// export const RECEIVE_ARTIST_ALBUMS = "RECEIVE_ARTIST_ALBUMS";


export const receiveAlbums = albums => {
   return {
      type: RECEIVE_ALBUMS,
      albums
   };
};

export const receiveAlbum = album => {
   return {
      type: RECEIVE_ALBUM,
      album
   };
};

// export const receiveArtistAlbums = albums => {
//    return {
//       type: RECEIVE_ARTIST_ALBUMS,
//       albums
//    };
// };

export const fetchAlbums = () => dispatch => (
   AlbumApiUtil.fetchAlbums()
      .then(albums => dispatch(receiveAlbums(albums)))
)

export const fetchAlbum = albumId => dispatch => (
   AlbumApiUtil.fetchAlbum(albumId)
      .then(album => dispatch(receiveAlbum(album)))
);

export const fetchArtistAlbums = bandId => dispatch => (
   AlbumApiUtil.fetchArtistAlbums(bandId)
      .then(albums => dispatch(receiveAlbums(albums)))
);