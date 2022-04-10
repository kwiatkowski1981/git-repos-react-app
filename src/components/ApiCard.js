import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';

export const ApiCard = props => {
    const {apiDescription, ghPages, gitHubLink, usedLanguage} = props;
    let {apiName} = props;

    const initialColor = 'rgba(255, 255, 255, 0.15)';
    let color = initialColor;
    let containerBgOpacity = 0.55;
    let techTextOpacity = 1;

    const technologyUsedColor = (usedLanguage, colorMod1, colorMod2, colorMod3, opacity) => {
        if (usedLanguage === 'Java') {
            color = `rgb(${168 + colorMod1}, ${116 + colorMod2} , ${47 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'JavaScript') {
            color = `rgb(${239 + colorMod1}, ${223 + colorMod2} , ${112 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'HTML') {
            color = `rgb(${211 + colorMod1}, ${86 + colorMod2} , ${53 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'TypeScript') {
            color = `rgb(${63 + colorMod1}, ${115 + colorMod2}, ${135 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'CSS') {
            color = `rgb(${82 + colorMod1}, ${64 + colorMod2}, ${120 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'Python') {
            color = `rgb(${68 + colorMod1}, ${114 + colorMod2}, ${161 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === 'SCSS') {
            color = `rgb(${184 + colorMod1}, ${91 + colorMod2} , ${138 + colorMod3}, ${opacity})`
        }
        else if (usedLanguage === null) {
            color = `rgb(${255 + colorMod1}, ${255 + colorMod2}, ${255 + colorMod3}, ${opacity})`
        }
        return color;
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

    const apiCardBgColor = technologyUsedColor(usedLanguage, 0, 0, 0, containerBgOpacity);
    const apiCardTechColor = technologyUsedColor(usedLanguage, 0, 0, 0, techTextOpacity);
    // const apiCardTechColorOnHover = technologyUsedColor(usedLanguage, 0, 0, 0, techTextOpacity);

    const [bgColorOnHover, setBgColorOnHover] = useState(initialColor);
    // const [techColorOnHover, setTechColorOnHover] = useState(apiCardTechColor);

    return (
        <li
            className={'api-card__container'}
            onMouseEnter={() => setBgColorOnHover(apiCardBgColor)}
            onMouseLeave={() => setBgColorOnHover(initialColor)}
            style={{background: bgColorOnHover}}
        >
            <div className={'api-card__upper'}>
                <div className={'api-card__logo'}>
                    <FontAwesomeIcon icon={faGithub} className={'github-icon'}/>
                </div>
                <div className={'api-card__repo-name'}>
                    <h2> {apiName} </h2>
                    <h4
                        // onMouseEnter={() => setTechColorOnHover(apiCardTechColorOnHover)}
                        // onMouseLeave={() => setTechColorOnHover(apiCardTechColor)}
                        // style={{color: techColorOnHover}}
                        style={{color: apiCardTechColor}}
                    >
                        {usedLanguage}
                    </h4>
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
                    {/*<li className={'api-card--link'} style={{'--i': 2}}>*/}
                    {/*    <a href="https://kwiatkowski1981.github.io/simple-editor/"> <FontAwesomeIcon icon={faYoutube}/>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li className={'api-card__link'} style={{'--i': 2}}>
                        <a href={gitHubLink}> <FontAwesomeIcon icon={faCode}/>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    )
}
