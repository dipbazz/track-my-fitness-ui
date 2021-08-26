export const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const reducerHandler = (state, action, actionHandler) => {
  switch (action.type) {
    case actionHandler.REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionHandler.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: null,
      };
    case actionHandler.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.data,
        data: null,
      };
    default:
      return state;
  }
};

export default reducerHandler;
