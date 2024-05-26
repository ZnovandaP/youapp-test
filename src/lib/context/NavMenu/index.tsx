'use client';

import * as React from 'react';

type NavMenuState = {
  isOpen: boolean
};

type NavMenuMAction = {
  type: 'open' | 'close' | 'toggle'
};

type NavMenuContextProviderProps = {
  children: React.ReactNode
};

const initialState: NavMenuState = {
  isOpen: false,
};

export const NavMenuStateContext = React.createContext<NavMenuState>(initialState);
export const NavMenuDispatchContext = React.createContext<React.Dispatch<
NavMenuMAction>>(() => null);

const reducer = (state: NavMenuState, action: NavMenuMAction): NavMenuState => {
  switch (action.type) {
    case 'open':
      return { isOpen: true };
    case 'close':
      return { isOpen: false };
    case 'toggle':
      return { isOpen: !state.isOpen };
    default:
      throw new Error('invalid action type');
  }
};

export default function NavMenuContextProvider({ children }: NavMenuContextProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <NavMenuStateContext.Provider value={state}>
      <NavMenuDispatchContext.Provider value={dispatch}>
        {children}
      </NavMenuDispatchContext.Provider>
    </NavMenuStateContext.Provider>
  );
}
