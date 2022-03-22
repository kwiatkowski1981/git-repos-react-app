import React, {useEffect, useState} from 'react';
import {ApiCard} from "./ApiCard";
// import {ApiCard} from "./api-card";

export const FetchData = props => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const result = await fetch(props.apiUri);
        const getResult = await result.json();
        setData(getResult);
    };

    useEffect(() => {

        getData()
        return () => {
            console.log('job is done');
        }
    }, []);

    return data.map(item => <ApiCard
        apiKey={item.id}
        apiName={item.name}
        apiDescription={item.description}
        gitHubLink={item.html_url}
        usedLanguages={item.languages}
        />
        )

}


