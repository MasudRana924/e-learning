import React, { useState } from 'react';
import './Leftsidebar.css'
const LeftSidebar = ({ videos, playVideo, currentVideoIndex }) => {
    const [clickedVideos, setClickedVideos] = useState(false);
    const handleVideoClick = (index) => {
        setClickedVideos(true);
        playVideo(index);
    };
    return (
        <div className="left-sidebar border border-gray-900 rounded lg:w-2/4 h-96 ">
            <div className="w-3/4 mx-auto">
                <h2 className="text-gray-300 text-2xl mt-8 font-semibold text-start font-sans">Courses Outline</h2>
                {videos.map((video, index) => (
                    <div className="flex justify-between">
                        <p key={video.id} onClick={() => handleVideoClick(index)} className={currentVideoIndex === index ? 'text-white mt-4 text-start font-mono' : 'text-gray-600 mt-4 text-start font-mono'}>
                            {video.title}
                        </p>
                        {clickedVideos && <p className='text-red-500'> clicked</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;