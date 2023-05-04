import React, { FC, useState } from "react";
import { EditExistingContactInput } from "./EditExistingContactInput";

interface DataProps {
  id: string;
  firstName: string;
  lastName: string;
  status: string;

  deleteContactFunction(id: string): void;
}

export const ContactCard: FC<DataProps> = ({
  id,
  firstName,
  lastName,
  status,

  deleteContactFunction,
}) => {
  const [edit, setEdit] = useState(false);
  const editData = { id, firstName, lastName, status };
  const handleDeleteContact = (id: string) => deleteContactFunction(id);
  const handleEditContact = () => setEdit((data) => !data);
  return !edit ? (
    <div className="card">
      <p>
        {firstName} {lastName}
      </p>

      {status.length > 0 ? <p>Status : {status}</p> : null}
      <div className="btn-container">
        <button className="primary-btn" onClick={handleEditContact}>
          {edit ? "Cancel" : "Edit Contact"}
        </button>
        <button
          className="secondary-btn"
          onClick={() => handleDeleteContact(id)}
        >
          Delete Contact
        </button>
      </div>
    </div>
  ) : (
    <EditExistingContactInput {...editData} />
  );
};
