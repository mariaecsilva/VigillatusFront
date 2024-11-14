import React from "react";
import { useLocation } from 'react-router-dom';
import { DivCard, Linha } from './Style.js';

export default function Card({ children }) {
    const location = useLocation();
    const isActive = location.pathname === '/ocorrencias';

    return (
        <DivCard className={isActive ? 'active' : ''}>
            <Linha />
            {children}
        </DivCard>
    );
}
