import React from 'react'
import { Container, TextField, Button, Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import "./registerNewPerson.css"
import Axios from 'axios'

const date = new Date()
date.setHours(date.getHours() + 2)

class RegisterNewPerson extends React.Component {
    state = {
        form: {
            firstname: {
                value: "Marcin",
                error: ""
            },
            lastname: {
                value: "Warzybok",
                error: ""
            },
            email: {
                value: "marcinwarz@outlook.com",
                error: ""
            },
            eventDate: {
                value: date.toISOString().substring(0, 19),
                error: ""
            }
        },
        isSuccessMessageVisible: false
    }

    onInputChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: {
                    ...this.state.form[e.target.name],
                    value: e.target.value
                }
            }
        })
    }

    clearErrors = () => {
        const form = { ...this.state.form }
        for (let keyInForm in form) {
            form[keyInForm].error = ""
        }
        this.setState({
            form
        })
    }

    clearFields = () => {
        const form = { ...this.state.form }
        for (let keyInForm in form) {
            form[keyInForm].value = ""
        }
        this.setState({
            form
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.clearErrors()
        Axios({
            url: "http://localhost:5000/api/event/register-new-person",
            method: "POST",
            data: {
                firstname: this.state.form.firstname.value,
                lastname: this.state.form.lastname.value,
                email: this.state.form.email.value,
                eventDate: this.state.form.eventDate.value
            }
        }).then((response) => {
            this.clearFields()
            this.setState({
                isSuccessMessageVisible: true
            })
        }).catch(err => {
            const form = { ...this.state.form }
            for (let keyInError in err.response.data.errorResponse) {
                for (let keyInForm in form) {
                    if (keyInError === keyInForm) {
                        form[keyInForm].error = err.response.data.errorResponse[keyInError]
                    }
                }
            }
            this.setState({
                form
            })
        })
    }

    handleSuccessMessageClose = () => {
        this.setState({
            isSuccessMessageVisible: false
        })
    }

    render() {
        return (
            <Container maxWidth="sm" className="main">
                <form onSubmit={this.onFormSubmit}>
                    <TextField
                        error={this.state.form.firstname.error.length === 0 ? false : true}
                        label="Firstname"
                        type="text"
                        name="firstname"
                        onChange={this.onInputChange}
                        value={this.state.form.firstname.value}
                        helperText={this.state.form.firstname.error}
                        className="input-form"
                    />
                    <br />
                    <TextField
                        error={this.state.form.lastname.error.length === 0 ? false : true}
                        label="Lastname"
                        type="text"
                        name="lastname"
                        onChange={this.onInputChange}
                        value={this.state.form.lastname.value}
                        helperText={this.state.form.lastname.error}
                        className="input-form"
                    />
                    <br />
                    <TextField
                        error={this.state.form.email.error.length === 0 ? false : true}
                        label="Email"
                        type="text"
                        name="email"
                        onChange={this.onInputChange}
                        value={this.state.form.email.value}
                        helperText={this.state.form.email.error}
                        className="input-form"
                    />
                    <br />
                    <TextField
                        error={this.state.form.eventDate.error.length === 0 ? false : true}
                        label="Date"
                        type="datetime-local"
                        value={this.state.form.eventDate.value}
                        onChange={this.onInputChange}
                        name="eventDate"
                        helperText={this.state.form.eventDate.error}
                        className="input-form"
                    />
                    <br />

                    <Button type="submit" variant="contained" color="secondary" style={{marginTop: 50}}>
                        Send
                    </Button>
                    <Snackbar open={this.state.isSuccessMessageVisible} onClose={this.handleSuccessMessageClose}>
                        <Alert onClose={this.handleSuccessMessageClose} severity="success">
                            Succesfuly added person
                        </Alert>
                    </Snackbar>
                </form>

            </Container>
        )
    }
}

export default RegisterNewPerson