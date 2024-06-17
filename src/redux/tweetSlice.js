import {createSlice} from "@reduxjs/toolkit"

const tweetSlice=createSlice({
    name:"tweet",
    initialState:{
       myTweets:[],
       followingTweets:[],
       allTweets:[]
    },
    reducers:{
        getAllTweets:(state,action)=>{
            state.allTweets=action.payload;
        },
        getMyTweets:(state,action)=>{
            state.myTweets=action.payload;
        },
        getFollowingTweets:(state,action)=>{
            state.followingTweets = action.payload;
        },
    }
})

export const {getAllTweets,getMyTweets,getFollowingTweets}=tweetSlice.actions;
export default tweetSlice.reducer;