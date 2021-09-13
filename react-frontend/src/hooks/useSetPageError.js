import { useContext } from 'react';

import { SetPageErrorContext } from '../contexts/SetPageErrorContext';

export const useSetPageError = () => {
  return (
    useContext(SetPageErrorContext) || {
      setPageError: () => {},
    }
  );
};