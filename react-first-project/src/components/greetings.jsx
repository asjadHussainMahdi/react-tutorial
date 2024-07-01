import { Component } from 'react'

class Greetings extends Component {
    state = {
        name: 'Mahdi',
        date: new Date(),
    }
    componentDidMount() {
        setInterval(() => {
            console.log('timeout called')
            this.setState({
                date: new Date(),
            })
        }, 1000)
    }

    render() {
        return (
            <h1>
                {this.props.message},{' '}
                <span style={{ color: 'green' }}>
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        )
    }
}

export default Greetings
