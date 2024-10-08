import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";
import { SideBarProvider } from "./context/sideBarContext";
import { ScreenSizeProvider } from "./context/screenSizeContext";

import "./App.css";
import "./css/mediaQueries.css";

function App() {
  return (
    <>
      <ScreenSizeProvider>
        <SideBarProvider>
          <Navbar />
        </SideBarProvider>
      </ScreenSizeProvider>
      <Main />
    </>
  );
}

export default App;
