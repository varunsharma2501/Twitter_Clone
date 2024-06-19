import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: [],
        profile: null,
        following: [],
        followers: [],
        likes:[],
        bookmarks:[]
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload;
        },
        getOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        getMyProfile: (state, action) => {
            state.profile = action.payload;
        },
        getFollowers: (state, action) => {
            state.followers = action.payload;
        },
        getFollowing: (state, action) => {  // <- Corrected parameter name here
            state.following = action.payload;
        },
        getLikes:(state,action)=>{
            state.likes=action.payload;
        },
        getBookmarks:(state,action)=>{
            state.bookmarks=action.payload;
        }

    }
});

export const {
    getUser,
    getOtherUsers,
    getMyProfile,
    getFollowers,
    getFollowing ,
    getLikes,
    getBookmarks // <- Corrected export name here
} = userSlice.actions;

export default userSlice.reducer;
