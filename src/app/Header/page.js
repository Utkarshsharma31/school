import React from "react";
 // Assuming Sidebar is in the parent directory
import "../Header/header.css"; // Custom CSS for the header
import Sidebar from "../sidebar/page";

function Header() {
  return (
    <nav>
      <div className="navbar">
        {/* Left Section: Logo and Sidebar */}
        <div className="nav-left">
          <div className="nav-logo">
            <h1>Academia IQ</h1>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Right Section: Profile/Login */}
        <div className="std-login">
          <img src="boy1.jpg" alt="User Profile" />
          <div className="std-log-panel">
            <div className="std-log-panel-text">
              <h4 className="stn-acc-name">
                Sunshine Academy <i className="fa-solid fa-chevron-down"></i>
              </h4>
            </div>

            {/* Dropdown Menu */}
            <div className="pop">
              <h5 className="acc-settings">
                <i className="fa-solid fa-gear"></i> Account Settings
              </h5>
              <h5 className="acc-profile">
                <i className="fa-solid fa-address-card"></i> Profile
              </h5>
              <h5 className="acc-logout">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
              </h5>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
