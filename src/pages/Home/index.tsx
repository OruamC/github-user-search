import React from 'react';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <h1 className="home-container-title">
            Desafio do Capítulo 3, Bootcamp DevSuperior
        </h1>
        <p className="home-container-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. 

            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.

            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
        </p>
        <button className="button-start">
            <h5 className="button-text">Começar</h5>
        </button>
    </div>
)

export default Home;