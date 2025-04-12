import type React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { Button, Stack } from "@mui/material";

const Header: React.FC = () => {
  return (
    <header className="user-header">
      <div className="user-container">
        <Link to="/" className="user-logo">
          Party Planner
        </Link>

        <div className="user-header-links">
          <div>
            <Stack spacing={2} direction="row">
              <Button variant="text">Home</Button>
              <Button variant="text">Products</Button>
              <Button variant="outlined">Login</Button>
            </Stack>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
