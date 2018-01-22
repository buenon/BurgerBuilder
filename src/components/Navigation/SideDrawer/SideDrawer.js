import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./SideDrawer.css";
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={[classes.SideDrawer, props.show ? classes.Open : classes.Closed].join(" ")}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Wrapper>
    );
};

export default SideDrawer;