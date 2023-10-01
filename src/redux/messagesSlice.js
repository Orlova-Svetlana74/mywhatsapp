import { createSlice } from '@reduxjs/toolkit';

const messagesSlise = createSlice({
  name: 'message',
  initialState: {
    message: {
      messageTxt: '',
      status: 'falce',
    },
  },
  reducers: {
    addMessage(state, action) {
      console.log (state);
      console.log (action);
      state.message.messageTxt = action.payload.messageTxt;
      state.message.status = action.payload.status;
    },
  },
});
export const { addMessage } = messagesSlise.actions;
export default messagesSlise.reducer;
