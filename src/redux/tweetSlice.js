import {createSlice} from "@reduxjs/toolkit"

const tweetSlice=createSlice({
    name:"tweet",
    initialState:{
       myTweets:[],
       followingTweets:[],
       allTweets:[],
       refresh:false,
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
        getRefresh:(state)=>{
            state.refresh=!state.refresh;
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

export const {getAllTweets,getMyTweets,getFollowingTweets,getRefresh}=tweetSlice.actions;
export default tweetSlice.reducer;