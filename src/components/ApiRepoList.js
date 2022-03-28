import React from 'react';
import {FetchData} from "./FetchData";
import {githubUrl} from "../github-reposithory-data/data";

export const ApiRepoList = props => <ul className={'api-card__list'}><FetchData apiUri={githubUrl}/> </ul>
