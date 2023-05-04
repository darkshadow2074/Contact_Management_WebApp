import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { AddNewContactInput } from "../components/AddNewContactInput";
import { ContactState } from "../ReducerFile/contactReducer";
import { ContactCard } from "../components/ContactCard";

export const ContactBookPage = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const contactList = useSelector<ContactState, ContactState["contactList"]>(
    (state) => state.contactList
  );
  const addContactFunction = (obj: any) => {
    dispatch({ type: "Add_Contact", payload: obj });
  };
  const deleteContactFunction = (id: string) => {
    dispatch({ type: "Delete_Contact", payload: id });
  };
  const handleAnotherContactClick = (): void => setClicked((data) => !data);
  return (
    <>
      {contactList.length > 0 ? (
        <div>
          <h1 className="heading">Contact Book</h1>
          <div className="contact-card">
            {contactList.map((ele) => (
              <ContactCard
                key={uuid()}
                {...ele}
                deleteContactFunction={deleteContactFunction}
              />
            ))}
          </div>
          <div className="another-btn-container">
            {clicked && (
              <AddNewContactInput
                addContactHandler={addContactFunction}
                handleToggleAnotherClick={handleAnotherContactClick}
                type="another-contact"
              />
            )}
            <button
              className={clicked ? "secondary-btn" : "primary-btn"}
              onClick={handleAnotherContactClick}
            >
              {!clicked ? "Add Another Contact" : "Cancel"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="No-Contact_Info">
            No Contact found <br /> Please Create Contact From Below Form :)
          </p>
          <AddNewContactInput
            addContactHandler={addContactFunction}
            handleToggleAnotherClick={handleAnotherContactClick}
          />
        </div>
      )}
    </>
  );
};
