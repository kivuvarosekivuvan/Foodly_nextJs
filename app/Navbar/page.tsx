import React from "react";

const Navbar: React.FC = () => {
  const navbarStyle = {
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
  };

  const navbarBrandStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
    marginTop: "3%",
  };

  const navbarTogglerStyle = {
    border: "none",
    background: "none",
    cursor: "pointer",
  };

  const collapseNavbarStyle = {
    display: "none",
    backgroundColor: "#333",
    padding: "10px",
    color: "#fff",
  };

  const navbarNavStyle = {
    display: "flex", 
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  const navItemStyle = {
    margin: 0,
  };

  const navStyle = {
    fontSize: "18px",
    color: "#333",
    textDecoration: "none",
    margin: "0 20px",
    transition: "color 0.3s ease",
    marginLeft: "300px",
  };

  const nav2Style = {
    fontSize: "18px",
    color: "#333",
    textDecoration: "none",
    margin: "0 20px",
    transition: "color 0.3s ease",
    marginLeft: "50px",
  };

  // Define other nav styles here

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .navbar {
        background-color: #333;
        padding: 10px;
      }
      
      /* Define other media query styles here */
    }
  `;

  return (
    <div>
      <style>{mediaQueryStyle}</style>
      <nav style={navbarStyle}>
        <div className="container-fluid">
          <a style={navbarBrandStyle} href="#">
            Foodle
          </a>
          <button style={navbarTogglerStyle} type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div style={collapseNavbarStyle}>
            <ul style={navbarNavStyle}>
              <li style={navItemStyle}>
                <a style={navStyle} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li style={navItemStyle}>
                <a style={nav2Style} href="#">
                  Offer
                </a>
              </li>
              {/* Add more navigation items */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
