import React, { Component } from 'react';

export default class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        isChecked: false,
        select: '',
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleChecked = (e) => {
        this.setState({
            isChecked: e.target.checked,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        if (name && email && password) {
            const dataObj = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
            };
            // console.log(dataObj);
            this.props.sendUser(dataObj);
            this.setState({
                name: '',
                email: '',
                password: '',
            });
        } else {
            alert('Input field was empty!!!');
        }
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
                        type="text"
                        name="phone"
                        placeholder="Enter Phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <select
                        name="select"
                        value={this.state.select}
                        onChange={this.handleChange}
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}
