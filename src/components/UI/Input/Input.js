import React, { Component } from 'react';
import classes from './Input.css';

class Input extends Component {
    render() {
        return (
            <div className={classes.Wrapper}>
                <label className={classes.Label}>{this.props.label}</label>
                <input className={classes.Input} type={this.props.type} onInput={this.input} onFocus={this.focus} onBlur={this.blur} />
                <div className={classes.Underline}></div>
            </div>
        );
    }

    focus = (event) => {
        event.currentTarget.parentElement.setAttribute("focused", "");
    }

    blur = (event) => {
        event.currentTarget.parentElement.removeAttribute("focused");
    }

    input = (event) => {
        let target = event.currentTarget;
        if (target.value === "") {
            event.currentTarget.parentElement.removeAttribute("has-text");
        } else {
            event.currentTarget.parentElement.setAttribute("has-text", "");
        }
    }
}

export default Input;