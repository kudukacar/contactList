import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateContact, fetchContact } from '../actions/contact_actions';

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.contact;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.fetchContact(this.props.match.params.contactId);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.updateContact(this.state).then(() => this.props.history.push('/'));
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }
    errors() {
        if (this.props.errors.contacts) {
            return (
                <ul>
                    {Object.values(this.props.errors.contacts).map((error, i) => <li key={i}>{error}</li>)}
                </ul>
            )
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        id="name" />
                <label htmlFor="mobile">Mobile</label>
                <input type="text"
                        value={this.state.mobile}
                        onChange={this.update('mobile')} 
                        id="mobile"/>
                <label htmlFor="home">Home phone</label>
                <input type="text"
                        value={this.state.home}
                        onChange={this.update('home')} 
                        id="home"/>
                <label htmlFor="work">Work phone</label>
                <input type="text"
                        value={this.state.work}
                        onChange={this.update('work')} 
                        id="work"/>
                <label htmlFor="email">Email</label>
                <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} 
                        id="email"/>
                <label htmlFor="address">Address</label>
                <input type="text"
                        value={this.state.address}
                        onChange={this.update('address')} 
                        id="address"/>
                <label htmlFor="image_url">Image_url</label>
                <input type="text"
                        value={this.state.image_url}
                        onChange={this.update('image_url')} 
                        id="image_url"/>
                <div>{this.errors()}</div>
                <input type="submit" value="Submit" />
            </form>
        )
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
    updateContact: contact => dispatch(updateContact(contact))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditContact));