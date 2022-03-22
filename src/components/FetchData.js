import React, {useEffect, useState} from 'react';
import {ApiCard} from "./ApiCard";
// import {ApiCard} from "./api-card";

export const FetchData = props => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const result = await fetch(props.apiUri);
            const getResult = await result.json();
            setData(getResult);
        };
        try {
            getData()
        } catch (e) {
            console.error(e);
        }
        return () => {
            console.log('job is done');
        }
    }, [props.apiUri]);

    const substring = 'Ch.Juniordev.';

    return data.map(item => <ApiCard
            key={item.id}
            apiKey={item.id}
            apiName={item.name.includes(substring) ? [...item.name].splice(13, item.name.length).join('') : item.name}
            apiDescription={item.description}
            gitHubLink={item.html_url}
            usedLanguages={item.languages}
        />
    )

}


