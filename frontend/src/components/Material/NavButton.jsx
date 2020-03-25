import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import Link from "../Routers/Link";

const NavButton = props => {
    const { link, title, loadable, ...other } = props;
    const linker = link || `/${title.toLowerCase().replace(/ /g, "-")}`;
    return (
        <Button color='inherit' component={Link} to={linker} {...other}>
            {title}
        </Button>
    );
};

NavButton.defaultProps = {
    loadable: null,
    link: null,
    title: null,
};

NavButton.propTypes = {
    loadable: PropTypes.any,
    link: PropTypes.string,
    title: PropTypes.string,
};

export default NavButton;
