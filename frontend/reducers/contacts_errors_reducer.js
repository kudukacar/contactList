import { RECEIVE_CONTACT, RECEIVE_CONTACT_ERRORS } from '../actions/contact_actions'


const contactsErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    const { errors } = action;

    switch(action.type) {
        case RECEIVE_CONTACT:
            return [];
        case RECEIVE_CONTACT_ERRORS:
            return errors;
        default:
            return state;
    }
}

export default contactsErrorsReducer;
