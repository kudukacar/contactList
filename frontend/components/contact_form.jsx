import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.contact;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => this.props.history.push('/'));
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
            <>
                <NavBar/>
                <form className="form" onSubmit={this.handleSubmit}>
                    <img src={this.state.image_url}/>
                    <label htmlFor="name"></label>
                    <input type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.update('name')}
                        id="name" />
                    <label htmlFor="mobile"></label>
                    <input type="text"
                        placeholder="Mobile"
                        value={this.state.mobile}
                        onChange={this.update('mobile')}
                        id="mobile" />
                    <label htmlFor="home"></label>
                    <input type="text"
                        placeholder="Home phone"
                        value={this.state.home}
                        onChange={this.update('home')}
                        id="home" />
                    <label htmlFor="work"></label>
                    <input type="text"
                        placeholder="Work phone"
                        value={this.state.work}
                        onChange={this.update('work')}
                        id="work" />
                    <label htmlFor="email"></label>
                    <input type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        id="email" />
                    <label htmlFor="address"></label>
                    <input type="text"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.update('address')}
                        id="address" />
                    <label htmlFor="image_url"></label>
                    <input type="text"
                        placeholder="Image_url"
                        value={this.state.image_url}
                        onChange={this.update('image_url')}
                        id="image_url" />
                    <div>{this.errors()}</div>
                    <div>
                        <input type="submit" value="Save" />
                        <a type='button' onClick={() => this.props.history.push('/')}>Cancel</a>
                    </div>
                </form>
            </>
        )
    }
}

export default withRouter(ContactForm);