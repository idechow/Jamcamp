
export const fetchAlbumCollects = albumId => (
   $.ajax({
      url: `/api/albums/${albumId}/collects`
   })
);

export const createCollect = data => (
   $.ajax({
      method: 'POST',
      url: '/api/collects',
      data
   })
);

export const deleteCollect = albumId => (
   $.ajax({
      method: 'DELETE',
      url: `api/collects/${albumId}`
   })
);