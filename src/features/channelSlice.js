import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  channelId: null,
  channelName: null,
}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    displayChannelName: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    }
  },
})

// Action creators are generated for each case reducer function
export const { displayChannelName } = channelSlice.actions

export default channelSlice.reducer