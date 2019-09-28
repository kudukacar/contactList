import { combineReducers } from 'redux';
import contactsErrorsReducer from './contacts_errors_reducer';

const errorsReducer = combineReducers({
    contacts: contactsErrorsReducer
})

export default errorsReducer;