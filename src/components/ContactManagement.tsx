import React from "react";

import { ContactManagementHeader } from "./ContactManagementHeader";
import { ContactManagementRoutes } from "./ContactManagementRoutes";

export const ContactManagement = () => {
  return (
    <>
      <h1 className="heading-primary">Contact Management Book</h1>
      <div className="root-container">
        <ContactManagementHeader />
        <ContactManagementRoutes />
      </div>
    </>
  );
};
