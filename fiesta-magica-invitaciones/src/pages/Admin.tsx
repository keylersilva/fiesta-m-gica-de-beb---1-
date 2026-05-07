import React from 'react';
import { useFirestoreListener } from '../hooks/useFirestoreListener';
import InviteList from '../components/InviteList';
import InviteForm from '../components/InviteForm';

const Admin: React.FC = () => {
    const { invites, loading, error } = useFirestoreListener('invites');

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error al cargar las invitaciones: {error.message}</div>;
    }

    return (
        <div>
            <h1>Gestión de Invitaciones</h1>
            <InviteForm />
            <InviteList invites={invites} />
        </div>
    );
};

export default Admin;