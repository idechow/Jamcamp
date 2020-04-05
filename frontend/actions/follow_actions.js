import * as FollowApiUtil from '../utils/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';

export const receiveFollow = follow => ({
   type: RECEIVE_FOLLOW,
   follow
});

export const removeFollow = follow => ({
   type: DELETE_FOLLOW,
   follow
});

export const createFollow = (data) => dispatch => (
   FollowApiUtil.createFollow(data)
      .then(follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = bandId => dispatch => (
   FollowApiUtil.deleteFollow(bandId)
      .then(follow => dispatch(removeFollow(follow)))
);
