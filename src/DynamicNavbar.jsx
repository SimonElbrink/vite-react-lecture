import React from "react";

const navLinks = [
  { id: 1, name: "Home", href: "#" },
  { id: 2, name: "Features", href: "#" },
  { id: 3, name: "Pricing", href: "#" },
  { id: 4, name: "Contact", href: "#" },
];

//Function to render navigation links
const renderNavLinks = () => {
  const liElements = navLinks.map((link) => {
    const liElement = (
      <li className="nav-item" key={link.id}>
        <a className="nav-link" href={link.href}>
          {link.name}
        </a>
      </li>
    );
    return liElement;
  });

  return liElements;
};

const DynamicNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MyApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* {renderNavLinks()} */}

            {navLinks.map((link) => (
             <li className="nav-item" key={link.id}>
                <a className="nav-link" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DynamicNavbar;
