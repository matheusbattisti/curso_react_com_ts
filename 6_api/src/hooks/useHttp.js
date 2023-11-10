import { useReducer, useEffect } from "react";
import axios from "axios";

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { data: null, error: null, loading: true };
    case "SUCCESS":
      return { data: action.responseData, error: null, loading: false };
    case "ERROR":
      return { data: null, error: action.errorMessage, loading: false };
    default:
      return state;
  }
};

const useHttp = (url, method = "GET", body = null, dependencies = []) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SEND" });
      try {
        const response = await axios({ url, method, data: body });
        dispatch({ type: "SUCCESS", responseData: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", errorMessage: "Algo deu errado!" });
      }
    };

    fetchData();
  }, dependencies);

  return httpState;
};

export default useHttp;
