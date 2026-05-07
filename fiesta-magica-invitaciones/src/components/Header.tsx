import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Fiesta Mágica de Ashly Sofia</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/admin">Administrar Invitaciones</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;