import React, { useState, ChangeEvent, FC } from "react";
interface NewContactDetailInputProps {
  addContactHandler(contactDetails: any): void;
  type?: string;
  handleToggleAnotherClick(): void;
}
export const AddNewContactInput: FC<NewContactDetailInputProps> = ({
  addContactHandler,
  type,
  handleToggleAnotherClick,
}) => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });
  const handleFirstNameInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput((prevInput) => ({ ...prevInput, firstName: e.target.value }));
  const handleLastNameInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput((prevInput) => ({ ...prevInput, lastName: e.target.value }));
  const handleActiveInactiveInputChange = (val: string) =>
    setInput((prevInput) => ({ ...prevInput, status: val }));

  const handleSaveContact = () => {
    addContactHandler(input);
    type === "another-contact" && handleToggleAnotherClick();
    setInput({
      firstName: "",
      lastName: "",
      status: "",
    });
  };
  return (
    <div className="input-form">
      <label className="input-label">
        <input
          className="input"
          type="text"
          onChange={handleFirstNameInputChange}
          placeholder="First Name"
          value={input.firstName}
        />
      </label>
      <label className="input-label">
        <input
          className="input"
          type="text"
          onChange={handleLastNameInputChange}
          placeholder="Second Name"
          value={input.lastName}
        />
      </label>
      <label className="input-label radio-label">
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
        disabled={
          input.firstName.length === 0 &&
          input.lastName.length === 0 &&
          input.status.length === 0
        }
        onClick={handleSaveContact}
        className="primary-btn"
      >
        Save Contact
      </button>
    </div>
  );
};
