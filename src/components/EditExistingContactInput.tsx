import React from "react";

import { useState, ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
interface NewContactDetailInputProps {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}
export const EditExistingContactInput: FC<NewContactDetailInputProps> = ({
  id,
  firstName,
  lastName,
  status,
}) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: id,
    firstName: firstName,
    lastName: lastName,
    status: status,
  });
  const handleFirstNameInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput((prevInput) => ({ ...prevInput, firstName: e.target.value }));
  const handleLastNameInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput((prevInput) => ({ ...prevInput, lastName: e.target.value }));
  const handleActiveInactiveInputChange = (val: string) =>
    setInput((prevInput) => ({ ...prevInput, status: val }));

  const handleSaveContact = (obj: any) => {
    console.log("inside edit contact", obj);
    dispatch({ type: "Edit_Contact", payload: obj });
    setInput(() => ({ id: "", firstName: "", lastName: "", status: "" }));
  };
  return (
    <div className="input-form">
      <label className="input-label">
        First Name :{" "}
        <input
          className="input"
          type="text"
          onChange={handleFirstNameInputChange}
          placeholder="First Name"
          value={input.firstName}
        />
      </label>
      <label className="input-label">
        Last Name :{" "}
        <input
          className="input"
          type="text"
          onChange={handleLastNameInputChange}
          placeholder="Second Name"
          value={input.lastName}
        />
      </label>
      <label className="input-label radio-label">
        Status :{" "}
        <label>
          <input
            className="input"
            onChange={() => handleActiveInactiveInputChange("Active")}
            type="radio"
            checked={input.status === "Active"}
          />{" "}
          Active
        </label>
        <label>
          <input
            className="input"
            onChange={() => handleActiveInactiveInputChange("Inactive")}
            type="radio"
            checked={input.status === "Inactive"}
          />{" "}
          Inactive
        </label>
      </label>
      <button
        className="primary-btn"
        onClick={() => handleSaveContact({ ...input })}
      >
        Update
      </button>
    </div>
  );
};
