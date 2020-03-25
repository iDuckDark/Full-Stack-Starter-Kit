import React, { Component } from "react";
import { AppBar, Toolbar, Button, Hidden, IconButton } from "@material-ui/core";
import {
    CloseIcon,
    Link,
    MaterialMenu,
    MenuIcon,
    NavButton,
    NavDropDown,
} from "../../helpers/components";
import logo from "../../images/favicon.png";
import { routes } from "../../routes";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            anchorEl: null,
        };
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleMenuClose = this.handleMenuClose.bind(this);
    }

    handleMenuClick({ currentTarget }) {
        this.setState({
            isOpen: true,
            anchorEl: currentTarget,
        });
    }

    handleMenuClose() {
        this.setState({
            isOpen: false,
            anchorEl: null,
        });
    }

    renderLogo() {
        return (
            <Link to='/' href='/' style={{ flexGrow: 1 }}>
                <img
                    src={logo}
                    alt='Logo'
                    style={{
                        maxWidth: "80px",
                        paddingTop: "15px",
                        paddingLeft: "32px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                />
            </Link>
        );
    }

    renderMenuItems() {
        return (
            <div>
                {routes.map(({ title, path: link, items }) =>
                    !items ? (
                        <NavButton key={title} link={link} title={title} />
                    ) : (
                        <NavDropDown
                            key={title}
                            color='primary'
                            items={items}
                            clickbubbledown='true'
                            component={Button}
                        >
                            {title}
                        </NavDropDown>
                    )
                )}
            </div>
        );
    }

    renderMobileMenuItems() {
        const { isOpen, anchorEl } = this.state;
        return (
            <div>
                <IconButton
                    onClick={this.handleMenuClick}
                    style={{ color: "#FFFFFF" }}
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                {isOpen && (
                    <MaterialMenu
                        anchorEl={anchorEl}
                        items={routes.map(({ title, path: link, items }) => ({
                            title,
                            link,
                            items,
                        }))}
                        isOpen={isOpen}
                        onClose={this.handleMenuClose}
                        color='primary'
                    />
                )}
            </div>
        );
    }

    renderThemeIcon(icon) {
        return (
            <img
                src={icon}
                width='16'
                height='16'
                alt='presentation'
                style={{
                    pointerEvents: "none",
                }}
            />
        );
    }

    render() {
        return (
            <AppBar
                color='default'
                position='sticky'
                style={{ padding: "0px 0 0" }}
            >
                <Toolbar>
                    {this.renderLogo()}
                    <Hidden smDown>{this.renderMenuItems()}</Hidden>
                    <Hidden mdUp>{this.renderMobileMenuItems()}</Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}

Header.defaultProps = {
    theme: null,
    toggleTheme: null,
};

Header.propTypes = {};

export default Header;
