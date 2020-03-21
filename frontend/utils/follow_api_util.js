
export const fetchUserFollows = userId => (
   $.ajax({
      url: `/api/users/${userId}/follows`
   })
);

export const createFollow = data => (
   $.ajax({
      method: 'POST',
      url: '/api/follows',
      data
   })
);

export const deleteFollow = bandId => (
   $.ajax({
      method: 'DELETE',
      url: `api/follows/${bandId}`
   })
);