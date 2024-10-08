import "./navigationStyle.css";
import { useEffect, useState, useContext } from "react";
import { SideBarContext } from "../../context/sideBarContext";

const links = [
  {
    mainLink: "link-1",
    subMenu: ["link-1-1", "link-1-2", "link-1-3", "link-1-4"]
  },
  {
    mainLink: "link-2",
    subMenu: ["link-2-1", "link-2-2", "link-2-3", "link-2-4"]
  },
  {
    mainLink: "link-3",
    subMenu: ["link-3-1", "link-3-2"]
  },
  {
    mainLink: "link-4",
    subMenu: ["link-4-1", "link-4-2", "link-4-3"]
  }
];

const MenuItem = ({ type, linkData, handleActiveMenu, index, activeMenu }) => {
  const { mainLink, subMenu } = linkData;
  const [isOpen, setIsOpen] = useState(false);

  const handleLink = () => {
    handleActiveMenu();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (activeMenu !== index && isOpen) setIsOpen(false);
  }, [activeMenu, isOpen]);

  return (
    <li onClick={type === "main" ? () => null : handleLink}>
      {mainLink}
      {type === "main" ? (
        <ul className="sub-navigation">
          {subMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <ul
          className="sub-navigation"
          style={{
            maxHeight: `${activeMenu === index && isOpen ? "120px" : "0px"}`
          }}
        >
          {subMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </li>
  );
};

export const Navigation = ({ type }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const { isSidebarOpen } = useContext(SideBarContext);

  useEffect(() => {
    if (!isSidebarOpen) setActiveMenu(null);
  }, [isSidebarOpen]);

  const handleActiveMenu = (index) => setActiveMenu(index);
  return (
    <ul className={`navigation ${type === "main" ? "main" : "side"}`}>
      {links.map((item, index) => (
        <MenuItem
          key={index}
          type={type}
          linkData={item}
          index={index}
          handleActiveMenu={() => handleActiveMenu(index)}
          activeMenu={activeMenu}
        />
      ))}
    </ul>
  );
};
