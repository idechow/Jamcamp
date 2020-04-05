
export const fetchUserFollows = userId => (
   $.ajax({
      url: `/api/users/${userId}/follows`
   })
);

export const createFollow = follow => (
   $.ajax({
      method: 'POST',
      url: '/api/follows',
      data: { follow }
   })
);

export const deleteFollow = bandId => (
   $.ajax({
      method: 'DELETE',
      url: `api/follows/${bandId}`
   })
);