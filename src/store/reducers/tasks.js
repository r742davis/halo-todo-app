import * as actionType from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: false,
  task: null
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TASK:
      return {
        ...state,
        task: true
      };
    default:
      return state;
  }
}

export default taskReducer;