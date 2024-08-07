// NarrowContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

interface NarrowContextProps {
  children: ReactNode;
}

interface NarrowContextValue {
  isNarrowed1: boolean;
  toggleIsNarrowed1: () => void;
}

const NarrowContext = createContext<NarrowContextValue>({
  isNarrowed1: false,
  toggleIsNarrowed1: () => {},
});

const NarrowProvider: React.FC<NarrowContextProps> = ({ children }) => {
  const [isNarrowed1, setIsNarrowed1] = useState(false);

  const toggleIsNarrowed1 = () => {
    setIsNarrowed1(prev => !prev);
  };

  const value: NarrowContextValue = {
    isNarrowed1,
    toggleIsNarrowed1,
  };

  return <NarrowContext.Provider value={value}>{children}</NarrowContext.Provider>;
};

const useNarrowContext = (): NarrowContextValue => {
  const context = useContext(NarrowContext);

  if (!context) {
    throw new Error('useNarrowContext must be used within a NarrowProvider');
  }

  return context;
};

export { NarrowProvider, useNarrowContext };
