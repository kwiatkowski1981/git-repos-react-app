import React from 'react';
import {SkillList} from "../skills/SkillList";
import {
    booksHaveToRead,
    knowSomethingAbout,
    mySoft,
    wantToLearn,
    workingKnowledge
} from "../../data/skillListData/skillListData";

import '../../App.css';

export const SkillsContainer = () => {

    return (
        <>
            <section className="skills-container">
                <h2 className={'article__title'}>My Skills</h2>
                <h3 className={'skills__container-heading-3'}>Working knowledge</h3>
                <SkillList list={workingKnowledge} className={'skills--list-1'}/>
                <h3 className={'skills__container-heading-3'}>Know something about</h3>
                <SkillList list={knowSomethingAbout}/>
                <h3 className={'skills__container-heading-3'}>Want to learn</h3>
                <SkillList list={wantToLearn}/>
                <h3 className={'skills__container-heading-3'}>The software I use</h3>
                <SkillList list={mySoft}/>
                <h3 className={'skills__container-heading-3'}>Books that I have and will read in the near future</h3>
                <SkillList list={booksHaveToRead}/>
            </section>

        </>

    )
}