export const fetchAlbums = () => (
   $.ajax({
      url: '/api/albums'
   })
);

export const fetchAlbum = (albumId) => (
   $.ajax({
      url: `/api/albums/${albumId}`,
   })
);

export const fetchArtistAlbums = bandId => (
   $.ajax({
      url: `/api/users/${bandId}/albums`
   })
);

// export const fetchAlbum = (albumId, bandId) => (
//    $.ajax({
//       url: `/api/users/${bandId}/albums/${albumId}`,
//    })
// );