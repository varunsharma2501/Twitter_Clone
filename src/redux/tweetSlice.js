import {createSlice} from "@reduxjs/toolkit"

const tweetSlice=createSlice({
    name:"tweet",
    initialState:{
       myTweets:[],
       followingTweets:[],
       allTweets:[],
       refreshTweet:false,
    //    likes:[],
    //    comments:[],
    //    bookmarks:[]
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
        getRefreshTweet:(state)=>{
            state.refreshTweet=!state.refreshTweet;
        }
        // getLikes:(state,action)=>{
        //     state.likes=action.payload;
        // },
        // getComments:(state,action)=>{
        //     state.comments=action.payload;
        // },
        // getBookmarks:(state,action)=>{
        //     state.bookmarks=action.payload;
        // }
    }
})

export const {getAllTweets,getMyTweets,getFollowingTweets,getRefreshTweet}=tweetSlice.actions;
export default tweetSlice.reducer;