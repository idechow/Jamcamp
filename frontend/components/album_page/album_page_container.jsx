import React from 'react';
import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { fetchArtistAlbums, clearAlbums } from '../../actions/album_actions';
import { fetchTracks, clearTracks } from '../../actions/track_actions';
import { fetchArtist, clearArtists } from '../../actions/artist_actions';
import { setTrack } from '../../actions/player_actions';
import { sortedTracksArr, sortedDiscogArr } from '../../reducers/selectors';
import { createCollect, deleteCollect } from '../../actions/collect_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
   return {
      currentUser: state.entities.users[state.session.id],
      artist: state.entities.artists[ownProps.match.params.bandId],
      album: state.entities.albums[ownProps.match.params.albumId],
      tracks: sortedTracksArr(state),
      discog: sortedDiscogArr(state),
   };
};

const mDTP = (dispatch) => {
   return {
      fetchArtist: bandId => dispatch(fetchArtist(bandId)),
      fetchTracks: albumId => dispatch(fetchTracks(albumId)),
      fetchArtistAlbums: bandId => dispatch(fetchArtistAlbums(bandId)),
      clearAlbums: () => dispatch(clearAlbums()),
      clearTracks: () => dispatch(clearTracks()),
      clearArtists: () => dispatch(clearArtists()),
      setTrack: track => dispatch(setTrack(track)),
      addCollect: data => dispatch(createCollect(data)),
      removeCollect: albumId => dispatch(deleteCollect(albumId)),
      addFollow: data => dispatch(createFollow(data)),
      removeFollow: bandId => dispatch(deleteFollow(bandId)),
      openModal: modal => dispatch(openModal(modal)),
   };
};

export default connect(mSTP, mDTP)(AlbumPage);