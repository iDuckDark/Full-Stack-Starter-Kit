import React, { Component } from "react";
import PropTypes from "prop-types";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import NavButton from "./NavButton";
import NavDropDown from "./NavDropDown";

class MaterialMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
            menuLevel: 1,
        };
        this.handleMobileDropdown = this.handleMobileDropdown.bind(this);
    }

    handleMobileDropdown(newItems) {
        const { width } = this.props;
        const { menuLevel } = this.state;
        if (isWidthDown("sm", width)) {
            this.setState({
                items: newItems,
                menuLevel: menuLevel + 1,
            });
        }
    }

    render() {
        const { isOpen, anchorEl, onClose, ...MenuProps } = this.props;
        const { items, menuLevel } = this.state;
        return (
            <Menu
                {...MenuProps}
                key={`menu-lvl-${menuLevel}`}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={onClose}
            >
                {items.map(({ title, path: link, items: navItems }) => {
                    if (!navItems)
                        return (
                            <NavButton
                                key={title}
                                title={title}
                                link={link}
                                style={{ color: "#FFFFFF" }}
                                component={MenuItem}
                                onClick={onClose}
                            />
                        );
                    return (
                        <NavDropDown
                            key={title}
                            // color='inherit'
                            // color='secondary'
                            style={{ color: "#FFFFFF" }}
                            items={items}
                            component={MenuItem}
                            onClick={() => this.handleMobileDropdown(navItems)}
                        >
                            {title}
                        </NavDropDown>
                    );
                })}
            </Menu>
        );
    }
}

MaterialMenu.defaultProps = {
    anchorEl: null,
    isOpen: null,
    items: null,
    onClose: null,
    width: null,
};

MaterialMenu.propTypes = {
    anchorEl: PropTypes.object,
    isOpen: PropTypes.bool,
    items: PropTypes.any,
    onClose: PropTypes.func,
    width: PropTypes.any,
};

export default withWidth()(MaterialMenu);
