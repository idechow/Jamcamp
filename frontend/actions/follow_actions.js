import * as FollowApiUtil from '../utils/collect_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_COLLECT';
export const DELETE_FOLLOW = 'DELETE_COLLECT';

export const receiveFollow = follow => ({
   type: RECEIVE_FOLLOW,
   follow
});

export const removeCollect = () => ({
   type: DELETE_FOLLOW,
   follow
});

export const createFollow = data => (
   FollowApiUtil.createFollow(data).then(
      follow => dispatch(receiveFollow(follow)))
);

export const deleteFollow = data => (
   FollowApiUtil.deleteFollow(data).then(
      follow => dispatch(removeFollow(follow)))
);
