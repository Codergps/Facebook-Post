import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
            profilePic="https://source.unsplash.com/100x100/?child,child"
            message="WOW this works!"
            timestamp="This is a timestamp"
            username="Gaurav"
            image="https://source.unsplash.com/400x200/?child,child" />
            <Post 
            profilePic="https://source.unsplash.com/100x100/?child,child"
            message="WOW this works!"
            timestamp="This is a timestamp"
            username="Gaurav"
            image="https://source.unsplash.com/400x200/?child,child"/>
        </div>
    )
}

export default Feed;
