
import { createSlice, configureStore } from '@reduxjs/toolkit';



let initialState = [
    {
        id: 1,
        username: 'amey',
        password: 'abcd',
        first: 0,
        second: 0,
        third: 0
    },
    {
        id: 2,
        username: 'ronaldo',
        password: 'abcd',
        first: 0,
        second: 0,
        third: 0
    },
    {
        id: 3,
        username: 'light',
        password: 'abcd',
        first: 0,
        second: 0,
        third: 0
    },
    {
        id: 4,
        username: 'loki',
        password: 'abcd',
        first: 0,
        second: 0,
        third: 0
    },
];

const dataSlice = createSlice({
    name: 'everyUserData',
    initialState,
    reducers: {
        setPositionHandler(state, action) {
            const index = state.findIndex(eachUser => {
                return eachUser.username === action.payload.loggedIn;
            });
            if (action.payload.activePosition === 1) {
                if (state[index].second === action.payload.id) {
                    state[index].second = 0;
                }
                if (state[index].third === action.payload.id) {
                    state[index].third = 0;
                }
                state[index].first = action.payload.id;
            }
            if (action.payload.activePosition === 2) {
                if (state[index].first === action.payload.id) {
                    state[index].first = 0;
                }
                if (state[index].third === action.payload.id) {
                    state[index].third = 0;
                }
                state[index].second = action.payload.id;
            }
            if (action.payload.activePosition === 3) {
                if (state[index].first === action.payload.id) {
                    state[index].second = 0;
                }
                if (state[index].second === action.payload.id) {
                    state[index].second = 0;
                }
                state[index].third = action.payload.id;
            }
        },
    }
});



export const dataActions = dataSlice.actions;


let store = configureStore({
    reducer: dataSlice.reducer,
})


export default store;