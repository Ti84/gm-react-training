import React, { useState } from 'react';

export const NetworkContext = React.createContext();

const NetworkWrapper = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <NetworkContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </NetworkContext.Provider>
  );
};

export default NetworkWrapper;
