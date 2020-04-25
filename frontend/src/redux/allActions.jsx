import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const {
    GATSBY_BACKEND_URL: BACKEND_URL,
    GATSBY_FLASK_BACKEND_URL: FLASK_BACKEND_URL,
} = process.env;

export const getUsers = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${BACKEND_URL}/users`);
            dispatch({ type: "getUsersSuccess", payload: response.data });
        } catch (error) {
            dispatch({ type: "getUsersFailed", payload: error });
            throw error;
        }
    };
};

export const getSalesPrediction = (
    rate,
    sales_in_first_month,
    sales_in_second_month
) => {
    return async dispatch => {
        try {
            const url = `${FLASK_BACKEND_URL}/results`;
            const data = {
                rate,
                sales_in_first_month,
                sales_in_second_month,
            };
            const response = await axios.post(url, data);
            dispatch({
                type: "getSalesPredictionSuccess",
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: "getSalesPredictionFailed",
                payload: error,
            });
            throw error;
        }
    };
};
