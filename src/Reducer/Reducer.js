export const initialValue = {
  user: {
    name: "",
    email: "",
    photo: "",
  },
  login: false,
  selectItem: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        selectItem: action.payload,
      };

    case "ADD_USER":
      const { name, photo, email } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name: name,
          photo: photo,
          email: email,
        },
      };
    case "SET_LOGIN":
      
      return {
        ...state,
        login: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
