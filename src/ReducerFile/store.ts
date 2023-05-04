import { createStore } from "redux";
import { contactReducer } from "./contactReducer";
// Creating a Store and using this store to provide data to overall components
export const store = createStore(contactReducer);
