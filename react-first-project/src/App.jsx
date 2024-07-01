import React from 'react'
import './App.css'
import Greetings from './components/greetings'

class App extends React.Component {
    render() {
        return (
            <>
                <Greetings message="Welcome" locale="BN-BD" />
            </>
        )
    }
}

export default App
