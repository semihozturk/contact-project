const contacts = (state, {type, payload}) => {
  switch(type) {
    case "GET_CONTACTS":
      return state;


    default:
      return state; // return previous state
    }
 }

 export default contacts;