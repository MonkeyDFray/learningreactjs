import React from 'react';
class ClockComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }
    act () {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }
    componentDidMount () {
        this.timeId = setInterval( () => this.act(), 1000)
    }
    componentWillUnmount () {
        clearInterval(this.timeId)
    }
    render(){
        return (
            <>
                <h2>{this.props.message}</h2>
                <h3>{this.state.date}</h3>
            </>
        )
    }
}
export default ClockComponent