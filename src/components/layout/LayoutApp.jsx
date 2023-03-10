import React from "react";
import LayoutLogin from "./../auth/layout/LayoutLogin";
import Layout from "./../../components/app/layout/Layout";
import { SLayout, SMain } from "./LayoutAppStyles";

const LayoutApp = ({ children }) => {
    return (
        <SLayout>
            <Layout></Layout>
            {/* <LayoutLogin></LayoutLogin> */}
        </SLayout>
    );
};

export default LayoutApp;
