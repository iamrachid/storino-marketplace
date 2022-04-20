export default {
  setOrder: ({commit, state}, newValue) => {
    commit('SET_ORDER', newValue);
    return state.data;
  }
}
