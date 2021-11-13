const auth = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'LOGIN':
      return state;

    default:
      return state;
  }
};

export default auth;
