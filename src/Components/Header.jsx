import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container my-1">
          <a className="navbar-brand " href="#">
            {/* <img src={ChapsLogo} width={50} alt="" /> */}
            FURNIZEN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  Collection
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  Service
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  Project
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  Testomonial
                </a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active menuitem"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
          
              <button className="contactus-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
