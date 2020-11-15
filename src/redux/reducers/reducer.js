import { ADD_USER, EDIT_USER, GET_USERS } from "../action/action";

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { users: action.payload };
      break;
    case ADD_USER:
      return { users: [...state.users, action.payload] };
      break;
    case EDIT_USER:
      const newUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return { users: newUsers };
      break;
    default:
      return state;
  }
};
