'use client'
import React, { useState } from "react";
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (menu) => {
    setSubmenuOpen(submenuOpen === menu ? null : menu);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button onClick={toggleSidebar} className="hamburger">
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              {/* Parent Item */}
              <div
                className="parent-menu"
                onClick={() => toggleSubmenu("student")}
              >
                <Link href={'/Student'}>Student</Link>
              </div>
              {/* Nested Items */}
              {submenuOpen === "student" && (
                <ul className="submenu">
                  <li><a href="#">Add Student</a></li>
                  <li><a href="#">View Student</a></li>
                  <li><a href="#">Edit Student</a></li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="parent-menu"
                onClick={() => toggleSubmenu("employee")}
              >
                Employee
              </div>
              {submenuOpen === "employee" && (
                <ul className="submenu">
                  <li><a href="#">Add Employee</a></li>
                  <li><a href="#">View Employee</a></li>
                  <li><a href="#">Edit Employee</a></li>
                </ul>
              )}
            </li>
            <li>
              <div
                className="parent-menu"
                onClick={() => toggleSubmenu("fee")}
              >
                Fee
              </div>
              {submenuOpen === "fee" && (
                <ul className="submenu">
                  <li><a href="#">Add Fee</a></li>
                  <li><a href="#">View Fee</a></li>
                  <li><a href="#">Edit Fee</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
