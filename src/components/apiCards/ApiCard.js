import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {DiCss3, DiHtml5, DiJava, DiJsBadge, DiPython, DiSass} from "react-icons/di";
import {SiTypescript} from "react-icons/si";
import {FaQuestion} from "react-icons/fa";


export const ApiCard = props => {
    const {apiDescription, ghPages, gitHubLink, usedLanguage} = props;
    let {apiName} = props;

    const initialColor = 'rgba(255, 255, 255, 0.15)';
    let color = initialColor;
    let containerBgOpacity = 0.55;
    let techTextOpacity = 1;
    let techIcon = '';

    const technologyUsedColor = (usedLanguage, colorMod1, colorMod2, colorMod3, opacity) => {
        if (usedLanguage === 'Java') {
            color = `rgba(${223 + colorMod1}, ${130 + colorMod2} , ${53 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'JavaScript') {
            color = `rgba(${239 + colorMod1}, ${223 + colorMod2} , ${112 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'HTML') {
            color = `rgba(${211 + colorMod1}, ${86 + colorMod2} , ${53 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'TypeScript') {
            color = `rgba(${63 + colorMod1}, ${115 + colorMod2}, ${135 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'CSS') {
            color = `rgba(${82 + colorMod1}, ${64 + colorMod2}, ${120 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'Python') {
            color = `rgba(${68 + colorMod1}, ${114 + colorMod2}, ${161 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'SCSS') {
            color = `rgba(${184 + colorMod1}, ${91 + colorMod2} , ${138 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === null) {
            color = `rgba(${255 + colorMod1}, ${255 + colorMod2}, ${255 + colorMod3}, ${opacity})`
        }
        return color;
    }

    const technologyUsedIcon = usedLanguage => {
        if (usedLanguage === 'Java') {
            techIcon = <DiJava className={'footerIcons'} size={'4.5rem'} fill={'rgb(223, 130, 53)'}/>;
        }
        else if (usedLanguage === 'JavaScript') {
            techIcon = <DiJsBadge className={'footerIcons'} size={'3rem'} fill={'rgb(236, 215, 77)'}/>;
        }
        else if (usedLanguage === 'HTML') {
            techIcon = <DiHtml5 className={'footerIcons'} size={'4rem'} fill={'rgb(205, 84, 52)'}/>;
        }
        else if (usedLanguage === 'TypeScript') {
            techIcon = <SiTypescript className={'footerIcons'} size={'3rem'} fill={'rgb(64, 116, 186)'}/>;
        }
        else if (usedLanguage === 'CSS') {
            techIcon = <DiCss3 className={'footerIcons'} fill={'rgb(42, 79, 213)'}/>;
        }
        else if (usedLanguage === 'Python') {
            techIcon = <DiPython className={'footerIcons'} size={'4.5rem'} fill={'rgb(67, 112, 156)'}/>;
        }
        else if (usedLanguage === 'SCSS') {
            techIcon = <DiSass className={'footerIcons'} fill={'rgb(184, 91, 138)'}/>;
        }
        else if (usedLanguage === null) {
            techIcon = <FaQuestion className={'footerIcons'} fill={'black'}/>;
        }
        return techIcon;
    }

    const substring = 'ch.juniordev.';
    apiName = apiName.toLowerCase().includes(substring) ? [...apiName].splice(13, apiName.length).join('') : apiName;
    apiName = apiName.replaceAll('_', '-');

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const r = /[A-Za-z0-9][a-z0-9]+/g;
    const split = [...apiName.matchAll(r)].map((d) => {
        return d.toString();
    });
    const capitalized = split.map((e) => capitalizeFirstLetter(e));
    apiName = capitalized.join('-');

    // const initialShadowColor = 'rgba(255, 255, 255, 0.5)';
    // const techLogoBoxShadowLeft = shadowColor => {
    //     return {
    //         boxShadow: `-6px -6px 9px ${shadowColor} , 6px 6px 9px rgba(70, 70, 70, 0.12)`
    //     }
    // };
    //
    // const xxx = `inset -6px -6px 9px ${initialShadowColor}, inset 6px 6px 9px rgba(70, 70, 70, 0.16)`


    // linear-gradient('0deg', 'rgba(255, 255, 255, 1)23%', 'rgba(175, 241, 250, 1) 100%')


    const apiCardBgColor = technologyUsedColor(usedLanguage, 0, 0, 0, containerBgOpacity);
    const apiCardTechColor = technologyUsedColor(usedLanguage, 0, 0, 0, techTextOpacity);
    const apiCardTechColorOnHover = technologyUsedColor(usedLanguage, 100, 100, 0, techTextOpacity);
    // const techLogoBoxShadowLeftOnHover = technologyUsedColor(technologyUsedColor(usedLanguage, 10, 10, 10, 0.2));

    const [bgColorOnHover, setBgColorOnHover] = useState(initialColor);
    const [techColorOnHover, setTechColorOnHover] = useState(apiCardTechColor);
    // const [shadowBoxColorLeft, setShadowBoxColorLeft] = useState(techLogoBoxShadowLeftOnHover(initialShadowColor));
    // const [shadowBoxColorRight, setShadowBoxColorRight] = useState(techLogoBoxShadowLeftOnHover(initialShadowColor));


    return (
        <li
            className={'api-card__container'}
            onMouseEnter={() => {
                setBgColorOnHover(apiCardBgColor)
                setTechColorOnHover(apiCardTechColorOnHover)
                // setShadowBoxColorLeft(techLogoBoxShadowLeft(techLogoBoxShadowLeftOnHover))
                // setShadowBoxColorRight(techLogoBoxShadowRight(techLogoBoxShadowLeftOnHover))
            }}
            onMouseLeave={() => {
                setBgColorOnHover(initialColor)
                setTechColorOnHover(apiCardTechColor);
                // setShadowBoxColorLeft(techLogoBoxShadowLeft(initialShadowColor))
                // setShadowBoxColorRight(techLogoBoxShadowRight(initialShadowColor))
            }}
            // style={{background: bgColorOnHover}}
            style={{background: `linear-gradient( ${0 +'deg'}, ${bgColorOnHover}  , ${initialColor} ${70 +'%'})` }}
        >
            <div className={'api-card__upper'}>
                <div
                    className={'api-card__logo'}
                    // style={shadowBoxColorLeft}
                >
                    {technologyUsedIcon(usedLanguage)}
                </div>
                <div className={'api-card__repo-name'}>
                    <h2
                        // style={{color: techColorOnHover}}
                        style={{color: apiCardTechColor}}
                    > {apiName}
                    </h2>
                </div>
            </div>
            <div className={'api-card__middle'}>
                <div className={'api-card__repo-description'}>
                    <h3> {apiDescription} </h3>
                </div>
            </div>
            <div className={'api-card__lower'}>
                <ul className={'api-card__link-list'}>
                    <li className={'api-card__link'} style={ghPages === null ? {display: 'none'} : {'--i': 1}}>
                        <a href={ghPages === null ? '' : ghPages}> <FontAwesomeIcon icon={faGithub}/> </a>
                    </li>

                    <li className={'api-card__link'} style={{'--i': 2}}>
                        <a href={gitHubLink}> <FontAwesomeIcon icon={faCode}/>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    )
}
