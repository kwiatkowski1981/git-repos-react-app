import React from 'react';

export const HeroContainer = () => {

    return (
        <section className="hero-container">
            <div className="hero-img">
                <img src={"/me-bright.jpg"} alt={'Jakub Kwiatkowski'} className="hero-img"/>
            </div>
            <div className="hero-text">
            <h1>Hi there! I'm Kuba and i'll FRAK Your Face</h1>
            </div>

        </section>
    )
}