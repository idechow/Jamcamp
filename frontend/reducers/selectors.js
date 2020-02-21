
export const sortedTracksArr = (state) => {
   const tracksArr = Object.values(state.entities.tracks);
   const sortTracksArr = tracksArr.sort((x, y) => { 
      x.trackNumber < y.trackNumber ? -1 : 1;
   })
   return sortTracksArr;
}

export const sortedDiscogArr = (state) => {
   const albumArr = Object.values(state.entities.albums);
   const sortAlbumsArr = albumArr.sort((x, y) => {
      x.releaseDate <= y.releaseDate ? 1 : -1;
   })
   return sortAlbumsArr;
}