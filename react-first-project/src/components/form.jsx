import React, { Component } from 'react';
import Listandkeys from './listandkeys';

export default class Form extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        formDataArray: [],
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const dataObj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({
            formDataArray: [...this.state.formDataArray, dataObj],
        });
        this.setState({
            name: '',
            email: '',
            password: '',
        });
    };

    render() {
        return (
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <h1>Form</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {this.state.formDataArray.map((dataObj) => (
                        <Listandkeys key={Math.random()} data={dataObj.name} />
                    ))}
                </ul>
            </>
        );
    }
}
