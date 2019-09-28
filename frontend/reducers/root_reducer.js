import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import contactsReducer from './contacts_reducer';

export default combineReducers({
    errors: errorsReducer,
    contacts: contactsReducer
});