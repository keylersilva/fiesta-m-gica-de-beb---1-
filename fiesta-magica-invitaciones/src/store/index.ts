import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Invitation {
  id: number;
  nombre?: string;
}

interface InvitationState {
  invitations: Invitation[];
}

const initialState: InvitationState = {
  invitations: [],
};

const invitationSlice = createSlice({
  name: 'invitations',

  initialState,

  reducers: {

    addInvitation: (
      state,
      action: PayloadAction<Invitation>
    ) => {
      state.invitations.push(action.payload);
    },

    removeInvitation: (
      state,
      action: PayloadAction<number>
    ) => {
      state.invitations = state.invitations.filter(
        invite => invite.id !== action.payload
      );
    },

  },
});

export const {
  addInvitation,
  removeInvitation
} = invitationSlice.actions;

const store = configureStore({
  reducer: invitationSlice.reducer,
});

export default store;