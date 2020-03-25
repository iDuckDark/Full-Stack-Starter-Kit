import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../helpers/actions";
import { isServerSideRendering } from "../../helpers/utils";

class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = { response: null };
    }

    componentDidMount() {
        this.setAPIs();
    }

    getArrayfromKey(array, key) {
        const result = [];
        for (const item of array) {
            result.push(item[key]);
        }
        return result;
    }

    setAPIs() {
        const { actions } = this.props;
        actions.getUsers().then(() => {
            const { users } = this.props;
            this.setState({ response: `API is working: ${users}` });
        });
    }

    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}> Sample Page {response} </div>
        );
    }
}

const mapStateToProps = ({ actionReducer }) => {
    return {
        users: actionReducer.users,
    };
};

Sample.defaultProps = {
    actions: null,
    users: null,
};

Sample.propTypes = {
    actions: PropTypes.any,
    users: PropTypes.any,
};

export default isServerSideRendering()
    ? Sample
    : connect(mapStateToProps, mapDispatchToProps)(Sample);
