import * as CollectApiUtil from '../utils/collect_api_util';

export const RECEIVE_COLLECTORS = 'RECEIVE_COLLECTORS';
export const RECEIVE_COLLECT = 'RECEIVE_COLLECT';
export const DELETE_COLLECT = 'DELETE_COLLECT';

export const receiveCollectors = collectors => ({
   type: RECEIVE_COLLECTORS,
   collectors
})

export const receiveCollect = collect => ({
   type: RECEIVE_COLLECT,
   collect
});

export const removeCollect = collect => ({
   type: DELETE_COLLECT,
   collect
});

export const createCollect = (data) => dispatch => (
   CollectApiUtil.createCollect(data)
      .then(collect => dispatch(receiveCollect(collect)))
);

export const deleteCollect = albumId => dispatch => (
   CollectApiUtil.deleteCollect(albumId)
      .then(collect => dispatch(removeCollect(collect)))
);

export const fetchCollectors = albumId => dispatch => (
   CollectApiUtil.fetchAlbumCollects(albumId)
      .then(collectors => dispatch(receiveCollectors(collectors)))
);