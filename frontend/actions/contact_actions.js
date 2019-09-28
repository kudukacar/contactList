import * as ContactApiUtil from '../util/contact_api_util';

export const RECEIVE_CONTACT = "RECEIVE_CONTACT";
export const RECEIVE_CONTACTS = "RECEIVE_CONTACTS";
export const RECEIVE_CONTACT_ERRORS = "RECEIVE_CONTACT_ERRORS";
export const REMOVE_CONTACT = "REMOVE_CONTACT";

export const fetchContact = id => dispatch => (
    ContactApiUtil.fetchContact(id).then(contact => dispatch(receiveContact(contact)))
);

export const fetchContacts = () => dispatch => (
    ContactApiUtil.fetchContacts().then(contacts => dispatch(receiveContacts(contacts)))
);

export const deleteContact = id => dispatch => (
    ContactApiUtil.deleteContact(id).then(contact => dispatch(removeContact(contact.id)))
)

export const updateContact = contact => dispatch => {
    return ContactApiUtil.updateContact(contact).then(contact => dispatch(receiveContact(contact)), errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const createContact = contact => dispatch => {
    return ContactApiUtil.createContact(contact).then(contact => dispatch(receiveContact(contact)), errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const receiveContact = contact => ({
    type: RECEIVE_CONTACT,
    contact
})

export const receiveContacts = contacts => ({
    type: RECEIVE_CONTACTS,
    contacts
})

export const receiveErrors = errors => ({
    type: RECEIVE_CONTACT_ERRORS,
    errors
})

export const removeContact = id => ({
    type: REMOVE_CONTACT,
    id
})