import React, {Component} from 'react';
import {connect} from 'react-redux';
import './todo.css';

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

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleTaskClick = (i) => {
        this.props.dispatch({type: 'SOLVED_TODO', index: i});
    }

    render() {
        const li = this.props.arr.map((item, i) => {
            let classNames = 'task';
            if (item.solved) {
                classNames += ' solved';
            }
            return (
                <li 
                    key={i} 
                    onClick={() => this.handleTaskClick(i)}
                    className={classNames}>
                        {item.text}
                </li>
            );
        });
        return (
            <div className='todo'>
                <ul className='list-unstyled'>
                    {li}
                </ul>
                <input 
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder='Enter a new task'
                    className='form-control'/>
                <button className='btn btn-primary btn-block mt-2' onClick={this.add}>Add</button>
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