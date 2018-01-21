import React from 'react';
import PropTypes from 'prop-types';
import MdMenu from "react-icons/lib/md/menu";
import classes from './MenuButton.css';

const MenuButton = props => {
    return (
        <MdMenu className={classes.MenuButton} onClick={props.click} />
    );
};

MenuButton.propTypes = {
    click: PropTypes.func,
};

export default MenuButton;