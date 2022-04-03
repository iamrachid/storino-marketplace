export default {
  setCustomer: ({commit, state}, newValue) => {
    commit('SET_CUSTOMER', newValue);
    return state.customer;
  }
}
