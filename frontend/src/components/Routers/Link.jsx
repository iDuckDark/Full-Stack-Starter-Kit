import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

const Link = props => {
    const { children, to, forceExternal, ...other } = props;
    const internal = /^\/(?!\/)/.test(to);
    const isFile = /\.[0-9a-z]+$/i.test(to);
    if (internal && !isFile) {
        return (
            <GatsbyLink to={to} {...other}>
                {children}
            </GatsbyLink>
        );
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    );
};

Link.defaultProps = {
    children: null,
    to: null,
    forceExternal: false,
};

Link.propTypes = {
    children: PropTypes.any,
    to: PropTypes.string,
    forceExternal: PropTypes.bool,
};

export default Link;
