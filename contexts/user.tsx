import React from 'react';
import Router from 'next/router';

import { fetchFromApi } from 'services/api';
import { HttpMethod } from 'enums/HttpMethod';
import firebase from 'firebase-auth/firebaseClient';
import { ROUTES } from 'consts/routes';

type User = any;

type State = {
  user?: User | null;
  isLoading: boolean;
  errorMessage: string;
};

type Action =
  | { type: 'login request' }
  | { type: 'login success'; payload: User }
  | { type: 'login failure'; payload: string }
  | { type: 'logout request' }
  | { type: 'logout success' }
  | { type: 'logout failure'; payload: string };
type Dispatch = (action: Action) => void;

const UserStateContext = React.createContext<State | undefined>(undefined);
const UserDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'login request':
      return {
        ...state,
        isLoading: true,
      };

    case 'login success':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        errorMessage: '',
      };

    case 'login failure':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    case 'logout request':
      return {
        ...state,
        isLoading: true,
      };

    case 'logout success':
      return {
        ...state,
        user: null,
        isLoading: false,
        errorMessage: '',
      };

    case 'logout failure':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    default: {
      new Error(`Unhandled action in user context: ${JSON.stringify(action)}`);
      return state;
    }
  }
}

const initialState = { user: undefined, isLoading: false, errorMessage: '' };

function UserProvider({ children, user }) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    user,
  });

  React.useEffect(() => {
    const firebaseListener = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const response = await fetchFromApi({
            url: '/users/login',
            method: HttpMethod.Post,
            body: { token },
          });
          if (response.ok) {
            dispatch({
              type: 'login success',
              payload: {
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                emailVerified: user.emailVerified,
                uid: user.uid,
              },
            });
            Router.push(ROUTES.homepage.path);
            return;
          }
          throw new Error(response.statusText);
        } catch (e) {
          alert(e.message);
        }
      } else {
        try {
          const response = await fetchFromApi({
            url: '/users/logout',
          });
          if (response.ok) {
            dispatch({ type: 'logout success' });
            return;
          }
          throw new Error(response.statusText);
        } catch (e) {
          alert(e.message);
        }
      }
    });

    return () => {
      if (firebaseListener) {
        firebaseListener();
      }
    };
  }, []);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
}

function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
}

async function loginUser(dispatch: Dispatch, email: string, password: string) {
  dispatch({ type: 'login request' });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(() => {
      dispatch({
        type: 'login failure',
        payload: 'Login failed. Please recheck your email and password.',
      });
    });
}

async function logoutUser(dispatch: Dispatch) {
  dispatch({ type: 'logout request' });
  firebase
    .auth()
    .signOut()
    .catch(error => {
      dispatch({ type: 'logout failure', payload: error.message });
    });
}

export { UserProvider, useUserState, useUserDispatch, loginUser, logoutUser };
