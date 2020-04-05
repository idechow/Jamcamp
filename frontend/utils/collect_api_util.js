
export const fetchAlbumCollects = albumId => (
   $.ajax({
      url: `/api/albums/${albumId}/collects`
   })
);

export const createCollect = collect => (
   $.ajax({
      method: 'POST',
      url: 'api/collects',
      data: { collect }
   })
);

export const deleteCollect = albumId => (
   $.ajax({
      method: 'DELETE',
      url: `api/collects/${albumId}`
   })
);