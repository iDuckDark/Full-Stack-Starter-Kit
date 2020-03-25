import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "../../helpers/material-ui";

const stylePropType = require("react-style-proptype");

const Title = ({ children, classes, style }) => (
    <Typography
        variant='h5'
        gutterBottom
        className={`title ${classes.root}`}
        style={style}
    >
        {children}
    </Typography>
);

const styles = theme => ({
    root: {
        "&:after": {
            // borderBottom: `2px solid ${theme.palette.text.primary}`,
            borderBottom: `2px solid #FFFFFF`,
        },
    },
});

Title.defaultProps = {
    children: null,
    classes: null,
    style: null,
};

Title.propTypes = {
    children: PropTypes.string,
    classes: PropTypes.any,
    style: stylePropType,
};

export default withStyles(styles)(Title);
