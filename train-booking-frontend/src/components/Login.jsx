import { Button, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loginForm: {
                username: '',
                password: ''
            },
            isSnackbarOpen: false,
            loginResponse: {}
        }
    }

    // handleLoginSubmit = () => {
    //     // console.log("Inside Handle Login submit");
    //     const url = 'http://localhost:9090/users/login';
    //     axios.post(url, this.state.loginForm)
    //         // .then(response => response.json())
    //         .then(response => {
    //             console.log("loginResponse: ", response);
    //             this.setState({ isSnackbarOpen: true, loginResponse: response.data })
    //         })
    //         .catch(errors => {
    //             console.log("errors: ", errors);
    //         })

    // }
    // Connectivity with log in
    handleLoginSubmit = () => {
        const config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        };
        const uname = this.state.loginForm.username;
        const pass = this.state.loginForm.password;
        axios.post("http://localhost:8080/AccountService/rest/account/login", null, { params: { uname, pass }, config })
            //.then(response => response.json())
            .then(response => {
                console.log("login response: ", response);
                this.setState({ isSnackbarOpen: true, loginResponse: response.data },()=>{
                    localStorage.setItem('firstname',this.state.loginResponse.firstname);
                    localStorage.setItem('lastname',this.state.loginResponse.lastname);
                });
            })
            .catch(errors => {
                console.log("errors: ", errors);
            })
    }


    render() {
        const handleChange = event => {
            if (event.target.name === 'username') {
                this.setState(prevState => ({
                    loginForm: {
                        ...prevState.loginForm,
                        username: event.target.value
                    }
                }));
            } else if (event.target.name === 'password') {
                this.setState(prevState => ({
                    loginForm: {
                        ...prevState.loginForm,
                        password: event.target.value
                    }
                }));
            } else {
                return;
            }
            // console.log("Login State value:::", this.state.loginForm);
        }

        const handleSnackbarClose = () => this.setState({ isSnackbarOpen: false });

        const snackbarAlertChecker = statusCode => {
            if (statusCode === 200)
                return "success";
            else if (statusCode === 422)
                return "error";
            else
                return "warning";
        }
        return (
            <div>
                <div className="snackbar">
                    <Snackbar open={this.state.isSnackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose}>
                        <Alert onClose={handleSnackbarClose}
                            severity="success">
                            {"welcome" + " " + this.state.loginResponse.firstname + " " + this.state.loginResponse.lastname}
                        </Alert>
                    </Snackbar>
                </div>
                <Form onSubmit={this.handleLoginSubmit}>
                    <Form.Field>
                        <label>Username</label>
                        <input name='username' placeholder='Username' type='text' onChange={handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name='password' placeholder='Password' type='password' onChange={handleChange} />
                    </Form.Field>
                    <Button type='submit' color='primary'>Login</Button>
                </Form>
            </div>
        )
    }
}

