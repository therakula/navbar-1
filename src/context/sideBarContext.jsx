import { createContext, useState } from "react";

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((curr) => !curr);

  return (
    <SideBarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};
