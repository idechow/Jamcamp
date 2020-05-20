
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

export const updateUser = (userId, formData) => {
   return $.ajax({
      method: 'PATCH',
      url: `api/users/${userId}`,
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json',
   });
};