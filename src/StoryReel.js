import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">  
            <Story
            image="https://source.unsplash.com/100x100/?man,human"
            profileSrc="https://source.unsplash.com/100x100/?man,human"
            title="Sachin" />
            <Story
            image="https://source.unsplash.com/100x100/?woman,woman"
            profileSrc="https://source.unsplash.com/100x100/?woman,woman"
            title="Saurav" />
            <Story 
            image="https://source.unsplash.com/100x100/?child,child"
            profileSrc="https://source.unsplash.com/100x100/?child,child"
            title="Rituraj"/>
            <Story 
            image="https://source.unsplash.com/100x100/?baby,baby"
            profileSrc="https://source.unsplash.com/100x100/?baby,babn"
            title="Rajendra"/>
            <Story 
            image="https://source.unsplash.com/100x100/?teen,teen"
            profileSrc="https://source.unsplash.com/100x100/?teen,teen"
            title="Ajeet"/>
        </div>
    )
}

export default StoryReel;
  