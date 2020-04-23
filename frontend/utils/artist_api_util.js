
export const fetchArtist = bandId => (
   $.ajax({
      url: `/api/artists/${bandId}`
   })
);

export const updateArtist = (userId, data) => (
   $.ajax({
      method: 'PATCH',
      url: `/api/users/${userId}`,
      data,
   })
);