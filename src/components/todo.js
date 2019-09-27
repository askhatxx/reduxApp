import React, {Component} from 'react';
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: ''
        };
    }

    add = () => {
        this.props.dispatch({type: 'ADD_TODO', text: this.state.text});
        this.setState({
            text: ''
        });
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        const li = this.props.arr.map((item, i) => <li key={i}>{item}</li>);
        return (
            <div>
                <ul>
                    {li}
                </ul>
                <input 
                    value={this.state.text}
                    onChange={this.onChange}
                />
                <button onClick={this.add}>add</button>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        arr: state.todo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);