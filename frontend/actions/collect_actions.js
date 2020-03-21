import * as CollectApiUtil from '../utils/collect_api_util';

export const RECEIVE_COLLECT = 'RECEIVE_COLLECT';
export const DELETE_COLLECT = 'DELETE_COLLECT';

export const receiveCollect = collect => ({
   type: RECEIVE_COLLECT,
   collect
});

export const removeCollect = collect => ({
   type: DELETE_COLLECT,
   collect
});

export const createCollect = data => (
   CollectApiUtil.createCollect(data).then(
      collect => dispatch(receiveCollect(collect)))
);

export const deleteCollect = albumId => (
   CollectApiUtil.deleteCollect(albumId).then(
      collect => dispatch(removeCollect(collect)))
);
