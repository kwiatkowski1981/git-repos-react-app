import React, {useEffect, useState} from 'react';
import {ApiCard} from "./ApiCard";

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

        return data.map(item => <ApiCard
                key={item.id}
                apiName={item.name}
                apiDescription={item.description}
                gitHubLink={item.html_url}
                usedLanguage={item.language}
            />
    )
}


