import { RECEIVE_CONTACT, RECEIVE_CONTACTS, REMOVE_CONTACT } from '../actions/contact_actions';
import merge from 'lodash/merge';

const contactsReducer = (state = {}, action) => {
    Object.freeze(state);
    const { contact, contacts, id } = action;

    switch(action.type) {
        case RECEIVE_CONTACT:
            return merge({}, state, { [contact.id]: contact })
        case RECEIVE_CONTACTS:
            return contacts;
        case REMOVE_CONTACT: 
            const newState = ({}, state);
            delete newState[id]; 
            return newState;
        default:
            return state;
    }

};

export default contactsReducer;