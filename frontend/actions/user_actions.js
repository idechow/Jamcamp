import React from 'react';
import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
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