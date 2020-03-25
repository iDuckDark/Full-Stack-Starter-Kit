import React, { Component } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons/icons";
import MaterialMenu from "./MaterialMenu";

class NavDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            anchorEl: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick({ currentTarget }) {
        const { isOpen } = this.state;
        this.setState({
            anchorEl: currentTarget,
            isOpen: !isOpen,
        });
    }

    handleClose() {
        this.setState({
            anchorEl: null,
            isOpen: false,
        });
    }

    render() {
        const { anchorEl, isOpen } = this.state;
        const {
            onClick,
            children,
            items,
            clickbubbledown,
            component: DropdownComponent,
        } = this.props;
        const icon = isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />;

        return (
            <span>
                <DropdownComponent
                    {...this.props}
                    onClick={e => {
                        if (clickbubbledown || !onClick) this.handleClick(e);
                        if (onClick) onClick(e);
                    }}
                >
                    {children}
                    {icon}
                </DropdownComponent>
                <MaterialMenu
                    anchorEl={anchorEl}
                    isOpen={isOpen}
                    style={{ marginTop: "40px" }}
                    onClose={this.handleClose}
                    items={items}
                />
            </span>
        );
    }
}

NavDropDown.defaultProps = {
    children: null,
    clickbubbledown: `false`,
    component: null,
    items: null,
    onClick: null,
};

NavDropDown.propTypes = {
    children: PropTypes.any,
    clickbubbledown: PropTypes.any,
    component: PropTypes.func,
    items: PropTypes.any,
    onClick: PropTypes.func,
};

export default NavDropDown;
