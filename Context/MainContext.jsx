import { createContext, useState } from "react";

export const DataContext = createContext("⛔");

const ContextProvider = ({ children }) => {
  const [test, setTest] = useState();

  return (
    <DataContext.Provider
      value={{
        test,
        setTest,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
