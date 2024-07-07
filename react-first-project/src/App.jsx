import React from 'react';
import './App.css';
import Form from './components/form';
import Greetings from './components/greetings';
import Listandkeys from './components/listandkeys';

class App extends React.Component {
    state = {
        database: [
            {
                task: 'Coffee',
            },
            {
                task: 'Tea',
            },
            {
                task: 'Juice',
            },
            {
                task: 'Chicken Tikka',
            },
        ],
    };
    render() {
        return (
            <>
                <Greetings message="Welcome" />
                <ul>
                    {this.state.database.map((dataObj) => (
                        <Listandkeys key={Math.random()} data={dataObj.task} />
                    ))}
                </ul>
                <Form />
            </>
        );
    }
}

export default App;
