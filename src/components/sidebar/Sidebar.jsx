import { Icon } from "../icon/Icon";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { SideBarContext } from "../../context/sideBarContext";
import { Navigation } from "../navigation/Navigation";

import "./sideBarStyle.css";

export const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useContext(SideBarContext);

  return (
    <div className="sidebar" style={{ right: isSidebarOpen ? "0" : "-300px" }}>
      <Icon Icon={RxCross2} handleClick={toggleSidebar} className="close-btn" />
      <Navigation />
    </div>
  );
};
