import React from "react";
import '../../App.css';
import {FaCheck} from "react-icons/fa";


export const SkillList = props => {



    const list = props.list
        .map((str, index) => <li
                className={'skill-list__element'}
                key={String(index)}
            >
            <div className="skill-list__icon"> <FaCheck className={'skill-list__icon-check'} fill={`${props.fillColor}`}/> </div>
                {str}
            </li>
        )

    return <ul className={'skill-list'}>{list}</ul>
}