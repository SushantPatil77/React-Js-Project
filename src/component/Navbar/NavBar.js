import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/company">
                  Company
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/dashboard">
                  Dashboard{" "}
                  <Badge bg="red"
                    style={{
                      width:"30px",
                      borderRadius: "20px",
                      textAlign: "center",
                      color: "white",
                      background:"red",
                      marginLeft: '10px',
                    }}
                  >
                    84
                  </Badge>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/notifications">
                  Notifications
                  <Badge bg="red"
                    style={{
                      width:"30px",
                      borderRadius: "20px",
                      textAlign: "center",
                      color: "white",
                      background:"red",
                      marginLeft: '10px',
                    }}
                  >
                    42
                  </Badge>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/statistics">
                  Statistics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/setting">
                  Setting
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
