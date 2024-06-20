import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from "./Tweet";

function BookmarkTweets() {
  const {bookmarks}=useSelector(store=>store.user);

  return (
     <div>
       {bookmarks && bookmarks.map((tweet) => (
            <Tweet key={tweet._id} tweet={tweet} />
        ))}
    </div>
  )
}

export default BookmarkTweets
