import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';


export const ApiCard = props => {
    const {apiDescription, gitHubLink, usedLanguage} = props;
    let {apiName} = props;


    const initialColor = 'rgba(255, 255, 255, 0.15)';

    let color = initialColor;
    let containerBackgroundOpacity = 0.55;
    let technologyTextOpacity = 1;
    const technologyUsedColor = (usedLanguage, opacity) => {
        if (usedLanguage === 'Java') {
            color = `rgb(168,116,47, ${opacity})`
        }
        else if (usedLanguage === 'JavaScript') {
            color = `rgb(239,223,112, ${opacity})`
        }
        else if (usedLanguage === 'HTML') {
            color = `rgb(211,86,53, ${opacity})`
        }
        else if (usedLanguage === 'TypeScript') {
            color = `rgb(63,115, 135, ${opacity})`
        }
        else if (usedLanguage === 'CSS') {
            color = `rgb(82,64, 120, ${opacity})`
        }
        else if (usedLanguage === 'Python') {
            color = `rgb(68,114,161, ${opacity})`
        }
        else if (usedLanguage === 'SCSS') {
            color = `rgb(184,91,138, ${opacity})`
        }
        else if (usedLanguage === null) {
            color = `rgb(255,255,255, ${opacity})`
        }
        return color
    }


    const [bgColorOnHover, setBgColorOnHover] = useState(initialColor);

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

    // todo => it doesn't work as I remove this console.log!
    // todo => Is data removed from memory even before being passed to the component?
    // console.log(`${usedLanguage}    => color: ` + technologyUsedColor(usedLanguage, containerBackgroundOpacity));
    technologyUsedColor(usedLanguage, containerBackgroundOpacity)

    return (
        <li
            className={'api-card--container'}
            onMouseEnter={() => setBgColorOnHover(technologyUsedColor({usedLanguage, containerBackgroundOpacity}))}
            onMouseLeave={() => setBgColorOnHover(initialColor)}
            style={{background: bgColorOnHover}}
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
