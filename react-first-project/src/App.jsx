import React from 'react'
import './App.css'
import Greetings from './components/greetings'

class App extends React.Component {
    getName() {
        return 'Mahdi'
    }
    render() {
        return (
            <>
                <Greetings name={this.getName} message="Welcome" />
            </>
        )
    }
}

export default App
