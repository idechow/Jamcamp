export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';

export const toggleDropdown = (dropdown) => {
   return {
      type: TOGGLE_DROPDOWN,
      dropdown
   };
};