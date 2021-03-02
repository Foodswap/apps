const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case CHANGE_INPUT_VALUE:
    //   return {
    //     ...state,
    //     [action.name]: action.value,
    //   };
    default:
      return state;
  }
};
