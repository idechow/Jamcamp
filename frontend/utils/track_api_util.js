export const fetchTracks = albumId => (
   $.ajax({
      url: `/api/albums/${albumId}/tracks`,
      method: 'GET'
   })
);

// export const fetchAlbumTracks = albumId => (
//    $.ajax({
//       url: `/api/albums/${albumId}`,
//       method: 'GET', 
//    })
// );
// export const fetchTrack = ({ albumId, trackNumber }) => (
//    $.ajax({
//       url: '/api/tracks/',
//       data: { albumId, trackNumber }
//    })
// );

// export const fetchTrack = trackId => (
//    $.ajax({
//       url: `/api/tracks/${trackId}`
//    })
// );
   