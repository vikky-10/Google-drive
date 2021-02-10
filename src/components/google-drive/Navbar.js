import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Navbar.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";

import AppsIcon from "@material-ui/icons/Apps";
import { useAuth } from "../../contexts/AuthContext";
import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
export default function NavbarComponent() {
  const { currentUser } = useAuth();
  return (
    // <Navbar bg="light" className="nav">
    //   <Navbar as={Link} to="/" className="first__nav">
    //     <img
    //       src="https://www.freepngimg.com/thumb/logo/66844-logo-google-drive-suite-free-hd-image-thumb.png"
    //       style={{ height: "30px", marginRight: "5px" }}
    //       alt="Google Drive"
    //     />

    //     <span>
    //       <strong>Drive</strong>
    //     </span>
    //   </Navbar>

    //   <Nav className="sec__nav">
    //     <Nav>
    //       <div className="header__icons">
    //         <div className="identity">
    //           <p> {currentUser.email}</p>
    //           <Avatar> {currentUser.email[0]}</Avatar>
    //         </div>
    //       </div>
    //     </Nav>
    //     <Nav.Link as={Link} to="/user" className="profile">
    //       Profile
    //     </Nav.Link>
    //   </Nav>
    // </Navbar>
    <div className="header">
      <div className="header__logo">
        <img
          src="https://www.freepngimg.com/thumb/logo/66844-logo-google-drive-suite-free-hd-image-thumb.png"
          alt="Google Drive"
        />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
          <AppsIcon />
        </span>
        <Nav.Link as={Link} to="/user" className="profile">
          <AccountCircleIcon />
        </Nav.Link>

        <p> {currentUser.email}</p>
        <Avatar> {currentUser.email[0]}</Avatar>
      </div>
    </div>
  );
}
