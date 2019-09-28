import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact_actions';
import { Link, withRouter } from 'react-router-dom';

class ContactIndex extends React.Component {

    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        const contacts = this.props.contacts.map((contact,i) => {
            return (
                <Link to={`/contact/${contact.id}`} key={i}>{contact.name}</Link>
            );
        });
        return(
            <div className="contacts">
                <ul>{contacts}</ul>
                <Link to={'/createcontact'}>Create New Contact</Link>
            </div>
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