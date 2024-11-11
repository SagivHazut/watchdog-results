import React, { useState } from "react";
import {
  FaHome,
  FaChartBar,
  FaCog,
  FaDatabase,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../style/Sidebar.scss";

const Sidebar = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

  const fakeData = {
    home: {
      icon: <FaHome />,
      label: "Home",
      subItems: ["Dashboard", "Profile", "Messages"],
    },
    analytics: {
      icon: <FaChartBar />,
      label: "Analytics",
      subItems: ["Overview", "Reports", "Graphs"],
    },
    settings: {
      icon: <FaCog />,
      label: "Settings",
      subItems: ["General", "Account", "Privacy"],
    },
    database: {
      icon: <FaDatabase />,
      label: "Database",
      subItems: ["Tables", "Queries", "Backup"],
    },
  };

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isActive = (section) => location.pathname.startsWith(`/${section}`);

  return (
    <div className='container'>
      <div className='sidebar'>
        {Object.keys(fakeData).map((section) => (
          <div
            key={section}
            className={`sidebar-item ${isActive(section) ? "active" : ""}`}
            onClick={() => handleToggle(section)}
          >
            <Link
              to={`/${section}/${fakeData[section].subItems[0].toLowerCase()}`}
            >
              {isActive(section) ? (
                <FaArrowAltCircleRight className='chosenIcon' />
              ) : (
                <span className='defaultIcon'>{fakeData[section].icon}</span>
              )}
            </Link>
          </div>
        ))}
      </div>

      {openSection && (
        <div className='side-menu'>
          <div className='mini-section'>
            <h3>{fakeData[openSection].label}</h3>
            <ul>
              {fakeData[openSection].subItems.map((item, index) => {
                const isActiveTab = location.pathname.endsWith(
                  `/${item.toLowerCase()}`
                );
                return (
                  <li key={index} className='mini-section-item'>
                    <Link
                      className={isActiveTab ? "chosen-mini-tab" : ""}
                      to={`/${openSection}/${item.toLowerCase()}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
