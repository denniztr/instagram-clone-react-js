import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.token = action.payload.token;
            localStorage.setItem('user', JSON.stringify(state.user))
            console.log(state.user)
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
