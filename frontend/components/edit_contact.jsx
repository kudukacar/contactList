import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContact, fetchContact } from '../actions/contact_actions';
import ContactForm from './contact_form';

class EditContact extends React.Component {
    componentDidMount() {
        this.props.fetchContact(this.props.match.params.contactId);
    }

    render() {
        const { action, contact, errors } = this.props;
        return (
            <ContactForm
                errors={errors}
                contact={contact}
                action={action} />
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const errors =  state.errors;
    const id = ownProps.match.params.contactId;
    const defaultContact = { name: "", mobile: "", home: "", work: "", email: "", address: "", image_url: "https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy.png" };
    const contact = state.contacts[id] || defaultContact;
    const fields = ["name", "mobile", "home", "work", "email", "address"];
    fields.forEach(field => {
        if (contact[field] === null) {
            contact[field] = "";
        }
    })
    return { contact, errors };
}

const mapDispatchToProps = dispatch => ({
    fetchContact: id => dispatch(fetchContact(id)),
    action: contact => dispatch(updateContact(contact))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContact));