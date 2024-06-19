import React from 'react';
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function AllTweets() {
    const { allTweets } = useSelector((store) => store.tweet);
    const { likes } = useSelector(store => store.user);

    return (
        <div>
            {allTweets && allTweets.map((tweet) => (
                <Tweet 
                    key={tweet?._id} 
                    tweet={tweet} 
                    flagLike={likes.includes(tweet._id)} 
                />
            ))}
        </div>
    );
}

export default AllTweets;
