import { SET_OFF_USER, SET_ON_USER } from "../UserActions/userAction";

const INITIAL_STATE = {
  user: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ON_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_OFF_USER:
        return{
          ...state,
            user:action.payload
        }
    default:
      return state
  }
};
