import React from 'react';
import {ApiRepoList} from "../apiCards/ApiRepoList";

export const ProjectsContainer = () => {

    return (
        <section className="projects-container">
            <h2 className={'article__title'}>My Github repositories</h2>
            <ApiRepoList />
        </section>
    )
}