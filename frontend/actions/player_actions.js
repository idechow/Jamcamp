export const PAUSE = "PAUSE"
export const PLAY = "PLAY"
export const SET_TRACK = 'SET_TRACK';

export const setPlay = () => {
   // debugger; 
   return {
   type: PLAY,
}};

export const setPause = () => {
   // debugger;
   return {
      type: PAUSE,
   }
};

export const setTrack = (track) => ({
   type: SET_TRACK,
   track
});