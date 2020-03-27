import React from "react";
import PropTypes from "prop-types";
import Link from "../Routers/Link";

const NavButton = props => {
    const { link, title, component: NavComponent, loadable, ...other } = props;
    const linker = link || `/${title.toLowerCase().replace(/ /g, "-")}`;
    return (
        <NavComponent color='inherit' to={linker} {...other}>
            <Link to={linker} style={{ color: "#000000" }}>
                {title}
            </Link>
        </NavComponent>
    );
};

NavButton.defaultProps = {
    component: null,
    loadable: null,
    link: null,
    title: null,
};

NavButton.propTypes = {
    component: PropTypes.any,
    loadable: PropTypes.any,
    link: PropTypes.any,
    title: PropTypes.any,
};

export default NavButton;
