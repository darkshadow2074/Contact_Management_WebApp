import { createStore } from "redux";
import { contactReducer } from "./contactReducer";

export const store = createStore(contactReducer);
