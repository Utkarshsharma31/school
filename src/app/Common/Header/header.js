import React from 'react'
import styles from "./header.css";
function Header() {
  return (
    <nav>
        <div class="navbar">
            <div class="nav-left">
                <div class="nav-logo">
                    <h1>eSkooly</h1>
                </div>

                <div class="nav-left-icon">
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-vector-square"></i>
                </div>
            </div>
            
            <div class="nav-right">
                <div class="nav-right-icon">
                    <i class="fa-solid fa-comments"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>

                <div class="std-login">
                <img src="boy1.jpg" alt="images"/>
                    <div class="std-log-panel">
                        <div class="std-log-panel-text">
                             <h4 class="stn-acc-name">Sunshine Academy <i class="fa-solid fa-chevron-down"></i></h4>
                        </div>
                       
                        <div class="pop">
                            <h5 class="acc-settings"><i class="fa-solid fa-gear"></i> Account Settings</h5>
                            <h5 class="acc-profile"><i class="fa-solid fa-address-card"></i> Profile</h5>
                            <h5 class="acc-logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header





    