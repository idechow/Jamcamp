import React from 'react';
import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { fetchAlbum, fetchArtistAlbums } from '../../actions/album_actions';
import { fetchTracks, clearTracks } from '../../actions/track_actions';


const mSTP = (state, ownProps) => {
   return {
      album: state.entities.albums[ownProps.match.params.albumId],
      tracks: state.entities.tracks
   };
};

const mDTP = (dispatch) => {
   return {
      fetchAlbum: albumId => dispatch(fetchAlbum(albumId)),
      fetchTracks: albumId => dispatch(fetchTracks(albumId)),
      fetchArtistAlbums: bandId => dispatch(fetchArtistAlbums(bandId)),
      clearTracks: () => dispatch(clearTracks()),
   };
};

export default connect(mSTP, mDTP)(AlbumPage);