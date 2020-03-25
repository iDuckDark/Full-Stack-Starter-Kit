import axios from "axios";

const httpClient = axios.create();
httpClient.defaults.timeout = 600000;

const BACKEND_URL = process.env.GATSBY_BACKEND_URL;

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
