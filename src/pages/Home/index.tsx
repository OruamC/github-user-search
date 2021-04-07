import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <h1 className="home-container-title">
            Desafio do Capítulo 3, Bootcamp DevSuperior
        </h1>
        <p className="home-container-text">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />

            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /><br />

            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="/">antforfigma@gmail.com</a>
        </p>
        <Link to="/search" style={{ textDecoration: 'none' }}>
            <div className="button-start-btn">
                <Button text="Começar" />
            </div>
        </Link>
    </div>
)

export default Home;