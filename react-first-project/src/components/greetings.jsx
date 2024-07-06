import { Component } from 'react';

class Greetings extends Component {
    state = {
        name: 'Mahdi',
        date: new Date(),
        locale: 'bn-BD',
        count: 0,
        isEnglish: false,
    };
    timer = null;
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    handleClick = () => {
        this.setState((prev) => {
            if (prev.locale === 'bn-BD') {
                return { locale: 'en-US', isEnglish: true };
            } else {
                return { locale: 'bn-BD', isEnglish: false };
            }
        });
    };

    render() {
        return (
            <>
                <h1>
                    {this.props.message},{' '}
                    <span style={{ color: 'green' }}>
                        {this.state.date.toLocaleTimeString(this.state.locale)}
                    </span>
                </h1>
                <button onClick={this.handleClick}>
                    {this.state.locale === 'bn-BD'
                        ? 'Change Langange to English'
                        : 'বাংলায় ঘড়ি পরিবর্তন করুন'}
                </button>
                {this.state.isEnglish && <p>Hello World</p>}
            </>
        );
    }
}

export default Greetings;
