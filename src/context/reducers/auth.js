const auth = (state, {type, payload}) => {
  switch(type) {
    case "LOGIN":
      return state;


    default:
      return state; // return previous state
    }
 }

 export default auth;