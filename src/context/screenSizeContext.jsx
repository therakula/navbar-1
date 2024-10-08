import { createContext, useLayoutEffect, useState } from "react";

export const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState();

  useLayoutEffect(() => {
    window.addEventListener("resize", () => setScreenSize(screen.width));

    return () =>
      window.removeEventListener("resize", () => setScreenSize(screen.width));
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
