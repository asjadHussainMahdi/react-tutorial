import { Component } from 'react'

class Greetings extends Component {
    render() {
        const { message, name, children } = this.props
        return (
            <h1>
                {message},{' '}
                <span style={{ color: 'green' }}>{children || name()}</span>
            </h1>
        )
    }
}

export default Greetings
