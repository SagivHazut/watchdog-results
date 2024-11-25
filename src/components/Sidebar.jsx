import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChartBar, FaDatabase, FaHome, FaBars } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import "../style/Sidebar.scss";
import classNames from "classnames";

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  const routes = {
    Dashboard: {
      icon: <FaHome />,
      label: "Dashboard",
    },
    PerformanceTrends: {
      icon: <FaChartBar />,
      label: "Performance Trends",
    },
    TestResultsTable: {
      icon: <FaTableList />,
      label: "Test Results Table",
    },
    Database: {
      icon: <FaDatabase />,
      label: "Database",
    },
  };

  // Handle responsive behavior
  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    updateView(); // Set initial value
    window.addEventListener("resize", updateView);

    return () => window.removeEventListener("resize", updateView);
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarExpanded((prevState) => !prevState);
  };

  const closeSidebar = () => {
    if (isMobileView) {
      setIsSidebarExpanded(false);
    }
  };

  const isActive = (section) => location.pathname.startsWith(`/${section}`);

  return (
    <div className='container'>
      <div onClick={handleSidebarToggle}>
        {isSidebarExpanded ? (
          <></>
        ) : (
          <div className='hamburger-menu'>
            <FaBars />
          </div>
        )}
      </div>
      <div
        className={classNames("sidebar", {
          expanded: isSidebarExpanded,
          collapsed: !isSidebarExpanded,
        })}
      >
        {Object.keys(routes).map((section) => (
          <div
            key={section}
            className={classNames("sidebar-item", {
              active: isActive(section),
            })}
            onClick={closeSidebar}
          >
            <Link to={`/${section}`}>
              <span className='icon'>{routes[section].icon}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
