import wheather from "../api/wheather";

export const whetherDetailsByCityName =
  ({ cityName }) =>
  async (dispatch) => {
    try {
      const res = await wheather.get("/weather", {
        params: {
          q: cityName,
          appid: "a67f8919b25e2077008489712277713b",
          units: "metric",
        },
      });
      dispatch({ type: "SEARCH_By_CITY", payload: { response: res.data } });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: {
          response: {
            error:
              "Something Went Wrong. See if you written city name correctly",
          },
        },
      });
    }
  };

export const DataClear = () => (dispatch) => {
  dispatch({ type: "DATA_CLEAR", payload: { response: "" } });
};
