import { createContext, useState } from "react";

export const ToggleMenuContext = createContext(null);
export const ToggleMenuContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  return (
    <ToggleMenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </ToggleMenuContext.Provider>
  );
};
