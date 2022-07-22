import { actionTypes } from "./actiontypes";

const initState = {
  currentdata: [],
  loading: false,
  error: false,
  success: false,
};

export const dataRedcer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        currentdata: [],
        loading: true,
        error: false,
        success: false,
      };
    }
    case actionTypes.SUCCESS: {
        return {
          ...state,
          currentdata: payload,
          loading: false,
          error: false,
          success: true,
        };
      }
      case actionTypes.ERROR: {
        return {
          ...state,
          currentdata: [],
          loading: false,
          error: true,
          success: false,
        };
      }
    default:
      return state;
  }
};
