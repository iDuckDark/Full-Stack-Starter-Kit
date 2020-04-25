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
        for (const item of array) result.push(item[key]);
        return result;
    }

    getSalesPrediction() {
        const rate = 5;
        const sales_in_first_month = 200;
        const sales_in_second_month = 400;
        const { actions } = this.props;
        actions
            .getSalesPrediction(
                rate,
                sales_in_first_month,
                sales_in_second_month
            )
            .then(() => {
                const { predictionSales } = this.props;
                // eslint-disable-next-line no-console
                console.log("Sales Prediction: ", predictionSales);
            });
    }

    setAPIs() {
        const { actions } = this.props;
        actions.getUsers().then(() => {
            const { users } = this.props;
            this.setState({ response: `API is working: ${users}` });
        });
        this.getSalesPrediction();
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
        predictionSales: actionReducer.predictionSales,
    };
};

Sample.defaultProps = {
    actions: null,
    users: null,
    predictionSales: null,
};

Sample.propTypes = {
    actions: PropTypes.any,
    users: PropTypes.any,
    predictionSales: PropTypes.any,
};

export default isServerSideRendering()
    ? Sample
    : connect(mapStateToProps, mapDispatchToProps)(Sample);
