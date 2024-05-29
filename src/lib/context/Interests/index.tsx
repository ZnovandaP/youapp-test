'use client';

import * as React from 'react';

type InterestsState = {
  data: string[]
};

type InterestsAction = {
  type: 'add' | 'delete' | 'init'
  payload: string | string[]
};

type InterestsContextProviderProps = {
  children: React.ReactNode
};

const initialState: InterestsState = {
  data: [] as string[],
};

export const InterestsStateContext = React.createContext<InterestsState>(initialState);
export const InterestsDispatchContext = React.createContext<React.Dispatch<
InterestsAction>>(() => null);

const reducer = (state: InterestsState, action: InterestsAction): InterestsState => {
  switch (action.type) {
    case 'add':
      return { data: [...state.data, action.payload as string] };
    case 'delete':
      return { data: state.data.filter((item) => item !== action.payload) };
    case 'init':
      return { data: action.payload as string[] };
    default:
      throw new Error('invalid action type');
  }
};

export default function InterestsContextProvider({ children }: InterestsContextProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <InterestsStateContext.Provider value={state}>
      <InterestsDispatchContext.Provider value={dispatch}>
        {children}
      </InterestsDispatchContext.Provider>
    </InterestsStateContext.Provider>
  );
}
