import React from "react";

import { Route, Routes } from "react-router";
import { ContactManagementHomePage } from "../pages/ContactManagementHomePage";

import { ChartPage } from "../pages/ChartPage";
import { ContactBookPage } from "../pages/ContactBookPage";
import { ErrorHandlerPage } from "../pages/ErrorHandlerPage";

export const ContactManagementRoutes = () => {
  return (
    <div className="contact_management-body">
      <Routes>
        <Route path="/" element={<ContactManagementHomePage />} />
        <Route path="/contacts" element={<ContactBookPage />} />
        <Route path="/chart" element={<ChartPage />} />
        <Route path="*" element={<ErrorHandlerPage />} />
      </Routes>
    </div>
  );
};
