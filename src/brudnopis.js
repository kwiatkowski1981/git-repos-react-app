import React, {useState} from 'react';

export const PassTextInput = props => {
    const [isPreview, setIsPreview] = useState(false);

    const showPreview = () => {
        // input.style.backgroundColor = 'red';
        setIsPreview(true);
    };
    const hidePreview = () => {
        setIsPreview(false);
    };
    return (
        <>
            <input type={isPreview ? 'text' : 'password'}/>
            <button
                onMouseDown={showPreview}
                onMouseUp={hidePreview}
            >
                {
                    isPreview ? '👁' : '👀'
                }
            </button>
        </>
    )
}