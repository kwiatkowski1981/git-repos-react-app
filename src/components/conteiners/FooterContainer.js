import React from 'react';

import {
    DiJsBadge,
    DiCss3,
    DiDatabase,
    DiGithubBadge,
    DiGit,
    DiJava,
    DiNodejs,
    DiSass,
    DiPython,
    DiMysql,
    DiPostgresql,
    DiNpm,
    DiMongodb,
    DiReact,
    DiRasberryPi,
    DiTrello,
    DiHtml5,

} from "react-icons/di";
import {
    SiNestjs,
    SiAdobelightroomclassic,
    SiAdobephotoshop,
    SiDocker,
    SiTypescript,
    SiMacos,
    SiTwitter,
    SiGmail,
    SiGitlab,
    SiMiro,
    SiWebstorm,
    SiLinkedin,
} from "react-icons/si";

import { BsCodeSlash } from "react-icons/bs";


export const FooterContainer = () => {

    return (
        <section className="footer-container">
            <h2 className={'article__title'}>Feel free to contact me anytime.</h2>
            <h3>You can find me on LinkedIn: Jakub Kwiatkowski</h3>
            <h3>Mail me: JakubKwiatkowski@someMail.com</h3>

            <DiHtml5 className={'footerIcons'}/>
            <DiCss3 className={'footerIcons'}/>
            <DiSass className={'footerIcons'}/>

            <DiJsBadge className={'footerIcons'}/>
            <SiTypescript className={'footerIcons'}/>
            <DiNodejs className={'footerIcons'}/>
            <DiNpm className={'footerIcons'}/>
            <SiNestjs className={'footerIcons'}/>
            <DiReact className={'footerIcons'}/>

            <DiGit className={'footerIcons'}/>
            <SiGitlab className={'footerIcons'}/>
            <DiGithubBadge className={'footerIcons'}/>

            <DiJava className={'footerIcons'}/>
            <DiPython className={'footerIcons'}/>

            <DiDatabase className={'footerIcons'}/>
            <DiMysql className={'footerIcons'}/>
            <DiPostgresql className={'footerIcons'}/>
            <DiMongodb className={'footerIcons'}/>

            <DiRasberryPi className={'footerIcons'}/>

            <DiTrello className={'footerIcons'}/>
            <SiMiro className={'footerIcons'}/>

            <SiWebstorm className={'footerIcons'}/>

            <SiAdobelightroomclassic className={'footerIcons'}/>
            <SiAdobephotoshop className={'footerIcons'}/>

            <SiDocker className={'footerIcons'}/>
            <SiMacos className={'footerIcons'}/>

            <SiLinkedin className={'footerIcons'}/>
            <SiTwitter className={'footerIcons'}/>
            <SiGmail className={'footerIcons'}/>

            <BsCodeSlash className={'footerIcons'}/>
        </section>
    )
}