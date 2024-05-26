import { useContext } from 'react';
import { NavMenuStateContext, NavMenuDispatchContext } from '@/lib/context/NavMenu';

const useOpenNavMenu = () => {
  const { isOpen } = useContext(NavMenuStateContext);
  const dispatch = useContext(NavMenuDispatchContext);

  return { isOpen, dispatch };
};

export default useOpenNavMenu;
