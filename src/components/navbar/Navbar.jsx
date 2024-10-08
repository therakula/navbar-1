import logo from "../../assets/react.svg";
import { GiHamburgerMenu } from "react-icons/gi";

import { Logo } from "../logo/Logo";

import { Navigation } from "../navigation/Navigation";
import { Icon } from "../icon/Icon";
import { Sidebar } from "../sidebar/Sidebar";
import { SideBarContext } from "../../context/sideBarContext";
import { ScreenSizeContext } from "../../context/screenSizeContext";
import { useContext, useEffect } from "react";

import "./navBarStyle.css";

export const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SideBarContext);
  const screenSize = useContext(ScreenSizeContext);

  useEffect(() => {
    if (isSidebarOpen && screenSize > 500) toggleSidebar();
  }, [screenSize]);

  return (
    <nav className="nav">
      <div className="navigation-wrapper">
        <Logo src={logo} />
        <Icon
          Icon={GiHamburgerMenu}
          className="burger"
          onClick={toggleSidebar}
        />
        <Navigation type="main" />
        <Sidebar />
      </div>
    </nav>
  );
};
