
export const fetchUser = userId => (
   $.ajax({
      url: `/api/users/${userId}`
   })
);

export const fetchUserProfile = userId => (
   $.ajax({
      url: `/api/users/${userId}/follows`
   })
);