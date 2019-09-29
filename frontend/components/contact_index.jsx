import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact_actions';
import { Link, withRouter } from 'react-router-dom';
import NavBar from './navbar';

class ContactIndex extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        const contacts = this.props.contacts.map((contact,i) => {
            return (
                <li key={i}>
                    <img src={contact.image_url} />
                    <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
                </li>
            );
        });
        return(
            <>
                <NavBar />
                <div className="contacts">
                    {contacts}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    const contacts = Object.values(state.contacts);
    contacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    return { contacts };
}

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactIndex));