import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
);


