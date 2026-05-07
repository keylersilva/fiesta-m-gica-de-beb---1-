import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const createInvitation = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const invitationData = req.body;

    try {
        const docRef = await admin.firestore().collection('invitations').add(invitationData);
        return res.status(201).send({ id: docRef.id });
    } catch (error) {
        console.error('Error creating invitation:', error);
        return res.status(500).send('Internal Server Error');
    }
});

export const getInvitations = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).send('Method Not Allowed');
    }

    try {
        const snapshot = await admin.firestore().collection('invitations').get();
        const invitations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return res.status(200).send(invitations);
    } catch (error) {
        console.error('Error fetching invitations:', error);
        return res.status(500).send('Internal Server Error');
    }
});