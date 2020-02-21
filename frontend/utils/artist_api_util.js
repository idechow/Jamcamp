

export const fetchArtist = bandId => (
   $.ajax({
      url: `/api/users/${bandId}`
   })
);