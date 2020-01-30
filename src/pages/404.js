import React from "react";

import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import Head from "../components/head";
import underConstruction from "../assets/under_construction.svg";
import FourOFourStyles from "../styles/fourOFour.module.scss";
const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <div className={FourOFourStyles.layout}>
                <img className={FourOFourStyles.underConstruction} src={underConstruction} />
                <h3>Uh Oh! Page not found!</h3>
                <h3><Link className={FourOFourStyles.link} to="/">Head Home?</Link></h3>
            </div>
        </Layout>
    )
}

export default NotFound;