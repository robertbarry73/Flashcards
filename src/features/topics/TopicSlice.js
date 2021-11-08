import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    id: '', name: '', icon: '', quizIds: []
}
export const topics = {
    name: 'topics',
    state: initialState,
    reducers: {
        addTopic: (state, action) => { 
            state.topics.id.push(action.payload) 
          }
    },
}

export const topicsSlice = createSlice(topics);

export const selectAllTopics = (state) => state.topics.topics;

export const addTopics = (state) => state.topics.addTopic;

export default topicsSlice.reducer;