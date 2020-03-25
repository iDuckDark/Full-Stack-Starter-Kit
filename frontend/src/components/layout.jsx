import React, { Component } from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <>
                <div className='site'>
                    <Header />
                    <div className='site-content'>{children}</div>
                    <Footer />
                </div>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
