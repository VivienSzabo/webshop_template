import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nav() {
  const [t, i18n] = useTranslation("global");

  const handleChamgeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const isHungarian = i18n.language === "hungary";

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
                end
              >
                <span className="nav-link">{t("nav.instrument")}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/uj-hangszer`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                <span className="nav-link">{t("nav.newInstrument")}</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {isHungarian ? (
          <button
            className="btn btn-warning mx-5"
            onClick={() => handleChamgeLanguage("english")}
          >
            EN
          </button>
        ) : (
          <button
            className="btn btn-warning mx-5"
            onClick={() => handleChamgeLanguage("hungary")}
          >
            HU
          </button>
        )}
      </nav>
    </div>
  );
}

export default Nav;
