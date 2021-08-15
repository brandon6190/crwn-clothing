import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({name: '', email: '', password: '', confirm: '' })
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>Sign Up</h2>
                <span>Enter info to create an account!</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='name'
                        type='name'
                        label='Name'
                        value={this.state.name}
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='confirm'
                        type='password'
                        label='Confirm Password'
                        value={this.state.confirm}
                        handleChange={this.handleChange}
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
