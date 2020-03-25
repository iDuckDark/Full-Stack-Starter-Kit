import React from "react";
import PropTypes from "prop-types";
import SvgIcon from "@material-ui/core/SvgIcon";
import { withStyles } from "@material-ui/core/styles";

const FlaskIcon = props => {
    return (
        <Icon
            {...props}
            path='M5,19C5,19.55 5.45,20 6,20H18C18.55,20 19,19.55 19,19C19,18.79 18.93,18.59 18.82,18.43L13,8.35V4H11V8.35L5.18,18.43C5.07,18.59 5,18.79 5,19M6,22C4.34,22 3,20.66 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6C8.45,6 8,5.55 8,5V4C8,2.9 8.9,2 10,2H14C15.1,2 16,2.9 16,4V5C16,5.55 15.55,6 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19C21,20.66 19.66,22 18,22H6M13,16L14.34,14.66L16.27,18H7.73L10.39,13.39L13,16M12.5,12C12.78,12 13,12.22 13,12.5C13,12.78 12.78,13 12.5,13C12.22,13 12,12.78 12,12.5C12,12.22 12.22,12 12.5,12Z'
        />
    );
};

const LightBulbIcon = props => {
    return (
        <Icon
            {...props}
            path='M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z'
        />
    );
};

const LeadPencilIcon = props => {
    return (
        <Icon
            {...props}
            path='M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29'
        />
    );
};

const ChevronDownIcon = props => {
    return (
        <Icon
            {...props}
            path='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
        />
    );
};

const ChevronUpIcon = props => {
    return (
        <Icon
            {...props}
            path='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'
        />
    );
};

const ChevronRightIcon = props => {
    return (
        <Icon
            {...props}
            path='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z'
        />
    );
};

const ChevronLeftIcon = props => {
    return (
        <Icon
            {...props}
            path='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'
        />
    );
};

const MenuIcon = props => {
    return (
        <Icon
            {...props}
            style={{ color: "#FFFFFF" }}
            path='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'
        />
    );
};

const CloseIcon = props => {
    return (
        <Icon
            {...props}
            style={{ color: "#FFFFFF" }}
            path='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
        />
    );
};

const icon = ({ path, className, classes, ...other }) => {
    return (
        <SvgIcon className={`${className} ${classes.icon}`} {...other}>
            <path d={path} {...other} />
        </SvgIcon>
    );
};

icon.defaultProps = {
    path: null,
    className: null,
    classes: null,
};

icon.propTypes = {
    path: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.object,
};

const iconStyles = theme => ({
    icon: {
        color: theme.palette.text.primary,
    },
});

const Icon = withStyles(iconStyles)(icon);

export {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    FlaskIcon,
    LeadPencilIcon,
    LightBulbIcon,
    MenuIcon,
};
