import React from 'react';
import './App.css';
import Form from './components/form';
import ShowUsers from './components/showUsers';

class App extends React.Component {
    state = {
        userData: [],
    };
    getUser = (user) => {
        this.setState({
            userData: [...this.state.userData, user],
        });
    };
    render() {
        // console.log(this.state.userData);
        return (
            <>
                <Form sendUser={this.getUser} />
                <ShowUsers getUserCollection={this.state.userData} />
            </>
        );
    }
}

export default App;
