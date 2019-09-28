import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactIndex from './contact_index';
import ContactIndexItem from './contact_index_item';
import CreateContact from './create_contact';
import EditContact from './edit_contact';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ContactIndex}/>
            <Route exact path="/contact/:contactId" component={ContactIndexItem}/>
            <Route exact path="/createcontact" component={CreateContact}/>
            <Route exact path="/editcontact/:contactId" component={EditContact}/>
        </Switch>
    </div>

)

export default App;