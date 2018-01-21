import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from "../UI/Backdrop/Backdrop";

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    openSideDrawerHandler = () => {
        this.setState({showSideDrawer: true});
    }
    
    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer show={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
} 

export default Layout;