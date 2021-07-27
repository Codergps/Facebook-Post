import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import './MessageSender.css';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {e.preventDefault()
    

         // Some Clevr db Stuff
         
        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender_input"
                        placeholder={`What's on your mind?`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{ color: "red" }} />
                    <h3>Live video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibrary style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender;