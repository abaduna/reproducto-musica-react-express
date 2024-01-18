import { useCallback, useEffect, useReducer, useState } from "react";

import { API } from "../API";
import { fetchReducer, initialState } from "../reducer/fetch";
import { FETCH_DATA } from "../action/fetch";

export const useFecth = (endopoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(fetchReducer, initialState);

 const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endopoint}`);
      dispatch({ type: FETCH_DATA.SET_DATA, payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: FETCH_DATA.SET_ERROR });
    }
  }, [endopoint]);

  useEffect(() => {
    getData();
  }, [endopoint, getData]);

  return {state,getData};
};
