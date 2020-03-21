
export const fetchArtist = bandId => (
   $.ajax({
      url: `/api/artists/${bandId}`
   })
);