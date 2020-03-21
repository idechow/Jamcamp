import { merge } from 'lodash';

import { TOGGLE_DROPDOWN } from '../actions/dropdown_actions';

const defaultState = {
   userEdit: false,
};

const dropdownReducer = (state = defaultState, action) => {
   Object.freeze(state);

   switch (action.type) {
      case TOGGLE_DROPDOWN:
         const newState = { [action.dropdown]: !state[action.dropdown] };
         return merge({}, state, newState);

      default:
         return state;
   }
};

export default dropdownReducer;