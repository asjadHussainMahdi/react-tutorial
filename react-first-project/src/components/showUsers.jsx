import React, { Component } from 'react';
import './app.css';

export default class ShowUsers extends Component {
    render() {
        const { getUserCollection } = this.props;
        return (
            <>
                <h1 className="headline">Table of Users</h1>
                <table border="1" width="50%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getUserCollection
                            .map((user) => {
                                return (
                                    <tr key={Math.random()}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                );
                            })
                            .reverse()}
                    </tbody>
                </table>
            </>
        );
    }
}
