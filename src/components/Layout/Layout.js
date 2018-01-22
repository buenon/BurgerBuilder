import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    openSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Wrapper>
                <Toolbar open={this.openSideDrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} close={this.closeSideDrawerHandler} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Wrapper>
        );
    }
}

export default Layout;