// Contact Reducer File - contactReducer function is basically used to perform operation over any action dispatched

import { v4 as uuid } from "uuid";
export interface ContactState {
  contactList: any[];
}

const initialContactList = {
  contactList: [],
};

export type Action = { type: string; payload: any };

export const contactReducer = (
  state: ContactState = initialContactList,
  action: Action
) => {
  switch (action.type) {
    // For Add Contact
    case "Add_Contact": {
      return {
        ...state,
        contactList: [...state.contactList, { id: uuid(), ...action.payload }],
      };
    }
    // For Edit Contact
    case "Edit_Contact": {
      return {
        ...state,
        contactList: state.contactList.reduce(
          (acc, curr) =>
            curr.id === action.payload.id
              ? [
                  ...acc,
                  {
                    ...curr,
                    id: action.payload.id,
                    firstName:
                      action.payload.firstName.length > 0
                        ? action.payload.firstName
                        : curr.firstName,
                    lastName:
                      action.payload.lastName.length > 0
                        ? action.payload.lastName
                        : curr.lastName,
                    status:
                      action.payload.status.length > 0
                        ? action.payload.status
                        : curr.status,
                  },
                ]
              : [...acc, { ...curr }],
          []
        ),
      };
    }
    // For Delete Contact
    case "Delete_Contact": {
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
