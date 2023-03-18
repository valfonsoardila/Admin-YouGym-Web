import React from "react";
//import LayoutLogin from "./../auth/layout/LayoutLogin";
import Layout from "./../../components/app/layout/Layout";
import { SLayout } from "./LayoutAppStyles";

const LayoutApp = ({ children }) => {
    return (
        <SLayout>
            <Layout>{ children }</Layout>
            {/* <LayoutLogin></LayoutLogin> */}
        </SLayout>
    );
};

export default LayoutApp;
