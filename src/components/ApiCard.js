import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';


export const ApiCard = props => {
    const {apiDescription, gitHubLink, usedLanguage} = props;
    let {apiName} = props;

    const substring = 'ch.juniordev.';
    apiName = apiName.toLowerCase().includes(substring) ? [...apiName].splice(13, apiName.length).join('') : apiName;
    apiName = apiName.replaceAll('_', '-');

    // [...apiName].forEach(letter => {
    //     if (letter === letter.toUpperCase() && (letter !== letter.index(0) && '-' && '2')) {
    //         // if (letter !== apiName[0] && '-' && '2') {
    //             console.log(letter)
    //         // }
    //     }
    // })

    // const r = /[A-Z]+[a-z]+/g;
    // const split = [...apiName.matchAll(r)].map((d) => {
    //     return d
    // })
    // apiName = split.join('-');

    return (
        <li className={'api-card--container'}>
            <div className={'api-card--upper'}>
                <div className={'api-card--logo'}>
                    <FontAwesomeIcon icon={faGithub} className={'github-icon'}/>
                </div>
                <div className={'api-card--repo-name'}>
                    <h2> {apiName} </h2>
                    <h4>{usedLanguage}</h4>
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
