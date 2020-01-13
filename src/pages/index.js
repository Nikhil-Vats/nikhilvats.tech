import React, { Component } from "react";

import Layout from "../components/layout/layout";
import Head from "../components/head";

import link from "../assets/link.svg";
import codeSvg from "../assets/code_music.svg";
import indexStyles from "./index.module.scss";

class IndexPage extends Component {
    render() {
        return (
            <Layout>
                <Head title="Home"/>
                <div className={indexStyles.introduction}>
                    <div><h2 className={indexStyles.line1}>Hello, I'm Nikhil, a full-stack developer living in India!</h2></div>
                    <img className={indexStyles.image} src={codeSvg} alt="" />
                </div>
                <div className={indexStyles.work}>
                    <h3>Work</h3>
                    <div className={indexStyles.projects}>
                        <div className={indexStyles.project}>
                            <div className={indexStyles.tools}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h4 className={indexStyles.heading}>eLife Innovation Sprint (<span className={indexStyles.title}>Attendee</span>) {'{'}</h4>
                            <div className={indexStyles.details}>
                                <span><img src={link} className={indexStyles.link} alt="link" /><a href="">eLife Innovation Sprint 2019</a></span>
                            </div>
                            <p className={indexStyles.description}>/* Selected amongst 134 applicants to attend the sprint with full scholarship where I will be working on further building BioJS CLI tool to automate process of upgrading components and integrate them with the registry using VueJS. */</p>
                            <p className={indexStyles.heading}>{'}'}</p>
                        </div>
                        <div className={indexStyles.project}>
                            <div className={indexStyles.tools}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h4 className={indexStyles.heading}>eLife Innovation Sprint (<span className={indexStyles.title}>Attendee</span>) {'{'}</h4>
                            <div className={indexStyles.details}>
                                <span><img src={link} className={indexStyles.link} alt="link" /><a href="">eLife Innovation Sprint 2019</a></span>
                            </div>
                            <p className={indexStyles.description}>/* Selected amongst 134 applicants to attend the sprint with full scholarship where I will be working on further building BioJS CLI tool to automate process of upgrading components and integrate them with the registry using VueJS. */</p>
                            <p className={indexStyles.heading}>{'}'}</p>
                        </div>
                        <div className={indexStyles.project}>
                            <div className={indexStyles.tools}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h4 className={indexStyles.heading}>eLife Innovation Sprint (<span className={indexStyles.title}>Attendee</span>) {'{'}</h4>
                            <div className={indexStyles.details}>
                                <span><img src={link} className={indexStyles.link} alt="link" /><a href="">eLife Innovation Sprint 2019</a></span>
                            </div>
                            <p className={indexStyles.description}>/* Selected amongst 134 applicants to attend the sprint with full scholarship where I will be working on further building BioJS CLI tool to automate process of upgrading components and integrate them with the registry using VueJS. */</p>
                            <p className={indexStyles.heading}>{'}'}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;