import React, { createContext, useState, useContext } from "react";
import { View, Text } from "react-native";

// Створення контексту
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
