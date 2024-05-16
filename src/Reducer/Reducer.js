export const initialValue = {
  user: {
    name: "",
    email:"",
    photo:""
  },
  login: false,
  selectItem :[]
};

 const reducer = (state,action) => {
  switch (action.type) {

    case "ADD_USER":
      const {name,photo,email} = action.payload
     return{
      ...state,
      user: {
        ...state.user,
        name:name,
        photo:photo,
        email:email
      }
     }
    case "SET_LOGIN":
      console.log(action.payload)
     return{
      ...state,
      login: action.payload
     }
  
    default:
      return state;
  }
}

export default reducer;