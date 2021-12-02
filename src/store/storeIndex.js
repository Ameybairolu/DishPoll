
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

// export const setPositionHandler = (pos, id, user) => {
//     const index = loginDetails.findIndex(eachUser => {
//         return eachUser.username === user;
//     })
//     if (pos === 1) {
//         loginDetails[index].first = id;
//     }
//     if (pos === 2) {
//         loginDetails[index].second = id;
//     }
//     if (pos === 3) {
//         loginDetails[index].second = id;
//     }
//     loginDetails = [...loginDetails];
// }


// Creating a slice using redux toolkit

const dataSlice = createSlice({
    name: 'everyUserData',
    initialState,
    reducers: {
        setPositionHandler(state, action) {
            console.log(action.payload);
            const index = state.findIndex(eachUser => {
                return eachUser.username === action.payload.loggedIn;
            });
            if (action.payload.activePosition === 1) {
                state[index].first = action.payload.id;
            }
            if (action.payload.activePosition === 2) {
                state[index].second = action.payload.id;
            }
            if (action.payload.activePosition === 3) {
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