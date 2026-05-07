import React from 'react';
import InviteList from '../components/InviteList';
import InviteForm from '../components/InviteForm';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Bienvenido a la Fiesta de Ashly Sofia!</h1>
            <InviteForm />
            <InviteList />
        </div>
    );
};

export default Home;