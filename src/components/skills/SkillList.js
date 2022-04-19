import React from "react";

export const SkillList = props => {
    const list = props.list
        .map((str, index) => <li
                className={'skill-list-element'}
                key={String(index)}
            >
            {/*<DiHtml5 size={'1.5rem'}/>*/}
                {str}
            </li>
        )

    return <ul className={'skill-list'}>{list}</ul>
}