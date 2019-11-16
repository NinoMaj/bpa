import React, { useRef, useState } from 'react';
import 'isomorphic-unfetch';

import { fetchFromApi } from 'services/api';
import { HttpMethod } from 'enums/HttpMethod';
import { IError } from 'types/IError';
import { IApiResponse } from 'types/IApiResponse';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const dataFetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        response: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      throw new Error();
  }
};

interface IResponse<T> {
  response: IApiResponse<T>;
  isLoading: boolean;
  errorMessage: string;
  doFetch(): void;
}

export function useFetch<T = any>({
  url,
  body,
  method,
  headers,
  initialData,
  lazy = false,
}: {
  url: string;
  method?: HttpMethod;
  body?: Record<string, any>;
  headers?: Headers;
  initialData?: any;
  lazy?: boolean;
}): IResponse<T> {
  const [state, dispatch] = React.useReducer(dataFetchReducer, {
    isLoading: false,
    errorMessage: '',
    response: {
      ...(initialData && { data: initialData }),
    },
  });

  const [key, setKey] = useState(0);
  const initialUrl = useRef(url);
  const isLazy = useRef(lazy);

  React.useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      if (!url || (isLazy.current && initialUrl.current === url)) {
        return;
      }
      dispatch({ type: FETCH_INIT });

      try {
        const response = await fetchFromApi<T | IError>({
          url,
          body,
          method,
          headers,
        });

        if (!didCancel) {
          if (response.ok) {
            return dispatch({
              type: FETCH_SUCCESS,
              url,
              payload: response,
            });
          }

          const errorResponse = response.data as IError;

          dispatch({
            type: FETCH_FAILURE,
            payload: errorResponse.message || 'Something went wrong.',
          });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url, key]);

  const doFetch = () => {
    isLazy.current = false;
    setKey((oldKey: number) => oldKey + 1);
  };

  return { ...state, doFetch };
}
