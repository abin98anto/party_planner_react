import type React from "react";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";

import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="user-header">
      <div className="user-container">
        <Link to="/" className="user-logo">
          SkillForge
        </Link>

        <nav className="user-nav">
          <ul>
            <li>
              <Link to="#">Courses</Link>
            </li>
            <li>
              <Link to="#">My Learning</Link>
            </li>
            <li>
              <Link to="#">Subscriptions</Link>
            </li>
          </ul>
        </nav>

        <div>
          <IconButton>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                border: "2px solid #primary.main",
              }}
            >
              U
            </Avatar>
          </IconButton>
          <Menu anchorEl={null} open={false}>
            <MenuItem>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                Profile
              </Link>
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
