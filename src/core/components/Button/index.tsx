import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => (
    <button className="button-start">
        <h5 className="button-text">{text}</h5>
    </button>
)

export default Button;