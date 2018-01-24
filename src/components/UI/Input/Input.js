import React, { Component } from 'react';
import classes from './Input.css';

class Input extends Component {
    render() {
        return (this.getInputElement());
    }

    getInputElement() {


        let inputElement = (<input
            {...this.props.config}
            className={classes.Input}
            value={this.props.value}
            onChange={this.props.changed}
            onInput={this.input}
            onFocus={this.focus}
            onBlur={this.blur} />
        );

        switch (this.props.elementType) {
            case ('textarea'):
                inputElement = (
                    <textarea
                        {...this.props.config}
                        className={classes.Textarea}
                        value={this.props.value}
                        onChange={this.props.changed}
                        onInput={this.input}
                        onFocus={this.focus}
                        onBlur={this.blur} />
                );
                break;
            case ('select'):
                let options = this.props.config.options;
                let optionElements = Object.keys(options).map(key => {
                    return <option key={key} value={options[key].value}>{options[key].caption}</option>
                });

                inputElement =
                    <select
                        className={classes.Select}
                        value={this.props.value}
                        onChange={this.props.changed}>
                        {optionElements}
                    </select>
                break;
            default:
        }

        return (
            <div className={classes.Wrapper}>
                <label className={classes.Label}>{this.props.label}</label>
                {inputElement}
                <div className={classes.Underline}></div>
            </div>
        );
    }

    focus = (event) => {
        event.target.parentElement.setAttribute("focused", "");
    }

    blur = (event) => {
        event.target.parentElement.removeAttribute("focused");
    }

    input = (event) => {
        let target = event.target;
        if (target.value === "") {
            target.parentElement.removeAttribute("has-text");
        } else {
            target.parentElement.setAttribute("has-text", "");
        }
    }
}

export default Input;