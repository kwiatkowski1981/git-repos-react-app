import React from 'react';
import {SkillList} from "../skills/SkillList";
import {
    booksHaveToRead,
    knowSomethingAbout,
    mySoft,
    wantToLearn,
    workingKnowledge
} from "../../data/skillListData/skillListData";

export const SkillsContainer = () => {

    return (
        <>
            <section className="skills-container">
                <h2>...My Skills</h2> <br/>
                <h3>Working knowledge</h3>
                <SkillList list={workingKnowledge}/> <br/>
                <h3>Know something about</h3>
                <SkillList list={knowSomethingAbout}/> <br/>
                <h3>Want to learn</h3>
                <SkillList list={wantToLearn}/> <br/>
                <h3>The software I use</h3>
                <SkillList list={mySoft}/> <br/>
                <h3>Books that I have and will read in the near future</h3>
                <SkillList list={booksHaveToRead}/>
            </section>

        </>

    )
}