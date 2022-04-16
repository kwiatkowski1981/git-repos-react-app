import React from "react";

export const SkillList = props => {
    const list = props.list
        .map((str, index) => <li className={'skillListElement'} key={String(index)}>{str}</li>)

    return <ul className={'skillList'}>{list}</ul>
}