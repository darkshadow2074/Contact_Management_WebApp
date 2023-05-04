import React from "react";

import { NavLink } from "react-router-dom";
export const ContactManagementHeader = () => {
  const applyActiveStle = ({ isActive }: any) => ({
    color: isActive ? "red" : "black",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: isActive ? "600" : "500",
    borderRight: isActive ? "5px solid black" : "none",
  });
  return (
    <div className="contact_management-sidebar">
      <div className="nav-links">
        <NavLink style={applyActiveStle} to="/">
          Home
        </NavLink>
        <NavLink style={applyActiveStle} to="/contacts">
          Contacts
        </NavLink>
        <NavLink style={applyActiveStle} to="/chart">
          Charts
        </NavLink>
      </div>
    </div>
  );
};
