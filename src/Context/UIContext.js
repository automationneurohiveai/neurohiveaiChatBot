import React, { createContext, useState, useContext } from "react";

export const UIContext = createContext();

// Провайдер контексту
export const UIContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <UIContext.Provider value={{ visible, setVisible }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => useContext(UIContext);
