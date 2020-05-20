import React from 'react';
import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_UPDATED_USER = "RECEIVE_UPDATED_USER";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

// export const receiveUser = user => {
//    return {
//       type: RECEIVE_USER,
//       user
//    };
// };

export const receiveProfile = profile => {
   return {
      type: RECEIVE_PROFILE,
      profile
   };
};

// export const fetchUser = userId => dispatch => (
//    UserApiUtil.fetchUser(userId)
//       .then(user => dispatch(receiveUser(user)))
// );

export const fetchProfile = userId => dispatch => (
   UserApiUtil.fetchUserProfile(userId)
      .then(profile => dispatch(receiveProfile(profile)))
);

//////

export const updateUser = (userId, data) => dispatch => (
   UserApiUtil.updateUser(userId, data)
   .then(user => dispatch(receiveUpdatedUser(user)))
);

export const receiveUpdatedUser = user => ({
   type: RECEIVE_UPDATED_USER,
   user
});