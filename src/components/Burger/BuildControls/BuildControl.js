import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div>{props.label}</div>
            <button
                className={classes.Add}
                disabled={props.disabled.add}
                onClick={() => {
                props.add(props.type)
            }}>Add</button>
            <button
                className={classes.Remove}
                disabled={props.disabled.remove}
                onClick={() => {
                props.remove(props.type)
            }}>Remove</button>
        </div>
    );
};

export default buildControl;