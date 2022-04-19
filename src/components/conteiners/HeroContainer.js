import React from 'react';

export const HeroContainer = () => {

    return (
        <section className="hero-container">
            <div className="hero__img-container">
                <img src={"/me-bright.jpg"} alt={'Jakub Kwiatkowski'} className="hero-img"/>
            </div>
            <div className="hero-text">
            <h1>Hi there! My name is Jakub Kwiatkowski and I am a fullstack JavaScript developer.</h1>
            </div>

        </section>
    )
}