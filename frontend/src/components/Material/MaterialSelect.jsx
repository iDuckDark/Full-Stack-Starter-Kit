import React, { Component } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "../../helpers/material-ui";

class MaterialSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { onChange } = this.props;
        onChange(event);
        this.setState({ value: event.target.value });
    }

    render() {
        const { value: selectedValue } = this.state;
        const { label, items, isRequired, style } = this.props;
        const name = label.toLowerCase().replace(/ /g, "-");

        return (
            <FormControl required={isRequired} style={style}>
                <InputLabel shrink htmlFor='select-placeholder'>
                    {label}
                </InputLabel>
                <Select
                    value={selectedValue}
                    onChange={this.handleChange}
                    inputProps={{
                        name,
                        id: `${name}-input`,
                    }}
                    name={name}
                >
                    {Object.values(items).map(value => (
                        <MenuItem value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

MaterialSelect.propTypes = {
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.string.isRequired,
            value: PropTypes.any.isRequired,
        })
    ).isRequired,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    style: stylePropType,
};

MaterialSelect.defaultProps = {
    isRequired: false,
    onChange: () => {},
    style: {},
};

export default MaterialSelect;
