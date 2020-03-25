import React from "react";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import SEO from "../components/SEO/SEO";
import Home from "./Home/Home";
import Sample from "./Sample/Sample";
import "./index.scss";
import store from "../redux/store";

const IndexPage = () => (
    <Layout>
        <SEO title='Full-Stack Start Kit Project by Nevin' />
        <Provider store={store}>
            <Home />
            <Sample />
        </Provider>
    </Layout>
);

export default IndexPage;
