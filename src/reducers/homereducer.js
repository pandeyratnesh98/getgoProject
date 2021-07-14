const INITIAL_STATE = { response: "" };

const homereducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "SEARCH_By_CITY":
      return { ...state, response: payload.response };
    case "ERROR":
      return { ...state, response: payload.response };
    case "DATA_CLEAR":
      return { ...state, response: payload.response };
    default:
      return state;
  }
};
export default homereducer;
