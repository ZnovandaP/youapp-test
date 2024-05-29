import { useContext } from 'react';
import { InterestsStateContext, InterestsDispatchContext } from '@/lib/context/Interests';

const useInterests = () => {
  const { data } = useContext(InterestsStateContext);
  const dispatch = useContext(InterestsDispatchContext);

  return { data, dispatch };
};

export default useInterests;
