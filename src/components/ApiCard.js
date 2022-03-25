import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {containerBackgroundOpacity, technologyTextOpacity, technologyUsedColor} from "./apiCardColors";


export const ApiCard = props => {
    const {apiDescription, gitHubLink, usedLanguage} = props;
    let {apiName} = props;

    const [bgColorOnHover, setBgColorOnHover] = useState('rgba(255, 255, 255, 0.15)');

    const substring = 'ch.juniordev.';
    apiName = apiName.toLowerCase().includes(substring) ? [...apiName].splice(13, apiName.length).join('') : apiName;
    apiName = apiName.replaceAll('_', '-');

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const r = /[A-Za-z0-9][a-z0-9]+/g;
    const split = [...apiName.matchAll(r)].map((d) => {
        return d.toString()
    })
    const capitalized = split.map((e) => capitalizeFirstLetter(e))
    apiName = capitalized.join('-')

    //todo doesn't work it remove this comment, why? have to initialize it?
    console.log(`${usedLanguage}    => color: ` + technologyUsedColor(usedLanguage, containerBackgroundOpacity));

    return (
        <li
            className={'api-card--container'}
            style={{background: bgColorOnHover}}
            onMouseEnter={() => setBgColorOnHover(technologyUsedColor({usedLanguage, containerBackgroundOpacity}))}
            onMouseLeave={() => setBgColorOnHover('rgba(255, 255, 255, 0.15)')}
        >
            <div className={'api-card--upper'}>
                <div className={'api-card--logo'}>
                    <FontAwesomeIcon icon={faGithub} className={'github-icon'}/>
                </div>
                <div className={'api-card--repo-name'}>
                    <h2> {apiName} </h2>
                    <h4 style={{color: technologyUsedColor({usedLanguage, technologyTextOpacity})}}>{usedLanguage}</h4>
                </div>
            </div>
            <div className={'api-card--middle'}>
                <div className={'api-card--repo-description'}>
                    <h3> {apiDescription} </h3>
                </div>
            </div>
            <div className={'api-card--lower'}>
                <ul className={'api-card--link-list'}>
                    <li className={'api-card--link'} style={{'--i': 1}}>
                        <a href={gitHubLink}> <FontAwesomeIcon icon={faGithub}/> </a>
                    </li>
                    <li className={'api-card--link'} style={{'--i': 2}}>
                        <a href="https://kwiatkowski1981.github.io/simple-editor/"> <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                    </li>
                    <li className={'api-card--link'} style={{'--i': 3}}>
                        <a href="https://github.com/kwiatkowski1981/simple-editor"> <FontAwesomeIcon icon={faCode}/>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    )
}
