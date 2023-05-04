import { uuid } from "uuidv4/";
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
    case "Add_Contact": {
      return {
        ...state,
        contactList: [...state.contactList, { id: uuid(), ...action.payload }],
      };
    }
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
