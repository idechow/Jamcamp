import React from 'react';
import * as UserApiUtil from '../utils/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
   return {
      type: RECEIVE_USER,
      user
   };
};

export const fetchUser = userId => dispatch => (
   UserApiUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user)))
);