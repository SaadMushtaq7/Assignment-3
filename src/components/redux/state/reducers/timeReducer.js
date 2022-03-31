import { EDIT_TIME } from "../actions-creator/types";

const initialState = {
  startTime: "09:00 AM",
  finishTime: "06:00 PM",
  workHrs: 8,
};
const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TIME: {
      state.startTime = action.payload.startTime;
      state.finishTime = action.payload.finishTime;
      state.workHrs = action.payload.workHrs;
      return state;
    }
    default:
      return state;
  }
};

export default timeReducer;
