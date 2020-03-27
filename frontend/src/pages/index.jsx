import React from "react";
import { Provider } from "react-redux";
import { SEO, Layout } from "../helpers/components";
import { Home, Sample } from "../helpers/pages";
import store from "../redux/store";
import "./index.scss";

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
