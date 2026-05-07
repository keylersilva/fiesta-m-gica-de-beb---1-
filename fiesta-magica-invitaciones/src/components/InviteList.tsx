import React from 'react';

const InviteList = ({ invites }) => {
    return (
        <div>
            <h2>Lista de Invitaciones</h2>
            <ul>
                {invites.map((invite) => (
                    <li key={invite.id}>
                        <h3>{invite.name}</h3>
                        <p>{invite.date}</p>
                        <p>{invite.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InviteList;