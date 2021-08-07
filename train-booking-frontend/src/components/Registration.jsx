import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { ClassicSpinner as Spinner } from 'react-spinners-kit';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            registrationForm: {
                firstname: '',
                lastname: '',
                gender: '',
                age: 0,
                username: '',
                password: '',
                address: '',
            },
            isSnackbarOpen: false,
            registrationResponse: {},
            isSpinnerLoading: false,
            statusCode: 0,
        }
    }

    isSpinnerLoading = value => this.setState({ isSpinnerLoading: value })

    handleRegistrationSubmit = () => {
        const firstname = this.state.registrationForm.firstname
        const lastname = this.state.registrationForm.lastname
        const username = this.state.registrationForm.username
        const password = this.state.registrationForm.password
        const age = this.state.registrationForm.age
        const gender = this.state.registrationForm.gender
        const address = this.state.registrationForm.address
        this.isSpinnerLoading(true);
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        const url = 'http://localhost:8080/AccountService/rest/account/register?firstname=' + firstname + '&lastname=' + lastname + '&username=' + username + '&password=' + password + '&age=' + age + '&gender=' + gender + '&address=' + address;
        //http://localhost:8080/AccountService/rest/account/registration
        //http://localhost:8080/AccountService/rest/api-docs?url=/AccountService/rest/openapi.json#/default/registerAccount
        // console.log("sign up form state: ", this.state);
        axios.post(url, config)
            // .then(response => response.json())
            .then(response => {
                console.log("signupResponse: ", response);
                this.setState({
                    isSnackbarOpen: true,
                    registrationResponse: response.data,
                    statusCode: response.status
                })
                this.isSpinnerLoading(false)
            })
            .catch(errors => {
                console.log("errors: ", errors.response);
                this.isSpinnerLoading(false);
            })
    }

    render() {
        const genderOptions = [
            { key: 'M', text: 'Male', value: 'M' },
            { key: 'F', text: 'Female', value: 'F' }
        ]

        const handleSnackbarClose = () => this.setState({ isSnackbarOpen: false });

        // const snackbarAlertChecker = statusCode => {
        //     console.log("status code : ", statusCode);
        //     if (statusCode === 201)
        //         return "success";
        //     else
        //         return "warning";
        // }

        const handleInputChange = event => {
            if (event.target.name === 'username') {
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        username: event.target.value
                    }
                }));
            } else if (event.target.name === 'password') {
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        password: event.target.value
                    }
                }));
            } else if (event.target.name === "firstname") {
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        firstname: event.target.value
                    }
                }));
            } else if (event.target.name === "lastname") {
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        lastname: event.target.value
                    }
                }));
            } else if (event.target.name === "age") {
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        age: event.target.value
                    }
                }));
            } else if (event.target.name === "address") {
                console.log("address:::", event);
                this.setState(prevState => ({
                    registrationForm: {
                        ...prevState.registrationForm,
                        address: event.target.value
                    }
                }));
            } else {
                return;
            }
        }

        return (
            <div>
                <div className="spinner">
                    <Spinner loading={this.state.isSpinnerLoading} size={50} color="grey" />
                </div>
                <div className="snackbar">
                    <Snackbar open={this.state.isSnackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
                        <Alert onClose={handleSnackbarClose}
                            severity={'success'}>
                            User resistered sucessfully...
                        </Alert>
                    </Snackbar>
                </div>
                <Form onSubmit={this.handleRegistrationSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>First Name</label>
                            <input name="firstname" placeholder='First Name' onChange={handleInputChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input name="lastname" placeholder='Last Name' onChange={handleInputChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            name="gender"
                            fluid
                            label='Gender'
                            options={genderOptions}
                            placeholder='Gender'
                            onChange={
                                (event, { value }) => {
                                    this.setState(prevState => ({
                                        registrationForm: {
                                            ...prevState.registrationForm,
                                            gender: value
                                        }
                                    }))
                                }
                            }
                        />
                        <Form.Field>
                            <label>Age</label>
                            <input name="age" placeholder='Age' type='number' onChange={handleInputChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Username</label>
                        <input name="username" placeholder='Username' type='text' onChange={handleInputChange} />
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Password</label>
                            <input name="password" placeholder='Password' type='password' onChange={handleInputChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirm Password</label>
                            <input name="confirmpassword" placeholder='Confirm Password' type='password' />
                        </Form.Field>
                    </Form.Group>
                    <Form.TextArea name="address" label='Address' placeholder='Write your full address' onChange={handleInputChange} />
                    <Button type='submit' color='primary'>Sign Up</Button>
                </Form>
            </div>
        )
    }
}

