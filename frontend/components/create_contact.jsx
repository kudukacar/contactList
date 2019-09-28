import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createContact } from '../actions/contact_actions';
import ContactForm from './contact_form';

const CreateContact = props => {
    const { action, contact, errors } = props;
    return (
        <ContactForm
            errors={errors}
            contact={contact}
            action={action} />
    );
}
const mapStateToProps = (state) => ({
    contact: {
        name: "",
        mobile: "",
        home: "",
        work: "",
        email: "",
        address: "",
        image_url: "https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy.png"
    },
    errors: state.errors
})

const mapDispatchToProps = dispatch => ({
    action: contact => dispatch(createContact(contact))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateContact));