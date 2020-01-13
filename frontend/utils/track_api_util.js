export const fetchTracks = albumId => (
   $.ajax({
      url: '/api/tracks/',
      data: { albumId }
   })
);

// export const fetchTrack = ({ albumId, trackNumber }) => (
//    $.ajax({
//       url: '/api/tracks/',
//       data: { albumId, trackNumber }
//    })
// );

export const fetchTrack = trackId => (
   $.ajax({
      url: `/api/tracks/${trackId}`
   })
);
   