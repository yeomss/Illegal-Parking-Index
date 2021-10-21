export default {
  TOGGLE_MENU(state) {
    console.log(state.isToggledMenu);
    state.isToggledMenu = !state.isToggledMenu;
  },
};
