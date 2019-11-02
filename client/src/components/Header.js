import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import Navbar from "../utils/Navbar"

class Header extends Component {

    onLogOut = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <Navbar />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        error: state.auth.error
    }
};

export default connect(mapStateToProps, {
    logoutUser
})(Header);
