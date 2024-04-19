import React, { useState } from 'react';
import LeftSidebar from '../sidebar/LeftSidebar';
import VideoSection from '../videos/VideoSection';
import Employees from '../features/Employees';
import Partner from '../features/Partner';
import Stats from '../features/Stats';
import Framework from '../features/Framework';
import Students from '../features/Students';
const videos = [
    {
        id: 1,
        title: "Introduction to React",
        description: "Learn the basics of React.js",
        videoUrl: "https://www.youtube.com/embed/Tn6-PIqc4UM"
    },
    {
        id: 2,
        title: "React Hooks Tutorial",
        description: "Master React hooks in this tutorial",
        videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q"
    },
    {
        id: 3,
        title: "Advanced React Patterns",
        description: "Explore advanced patterns in React development",
        videoUrl: "https://www.youtube.com/watch?v=S-gp56h9pKI&ab_channel=RoyalChallengersBengaluru"
    },
    {
        id: 4,
        title: "Advanced React Patterns",
        description: "Explore advanced patterns in React development",
        videoUrl: "https://www.youtube.com/watch?v=S-gp56h9pKI&ab_channel=RoyalChallengersBengaluru"
    }
    ,
    {
        id: 5,
        title: "Advanced React Patterns",
        description: "Explore advanced patterns in React development",
        videoUrl: "https://www.youtube.com/watch?v=S-gp56h9pKI&ab_channel=RoyalChallengersBengaluru"
    }
    ,
    {
        id: 6,
        title: "Advanced React Patterns",
        description: "Explore advanced patterns in React development",
        videoUrl: "https://www.youtube.com/watch?v=S-gp56h9pKI&ab_channel=RoyalChallengersBengaluru"
    }
];
const MainPage = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const playVideo = (index) => {
        setCurrentVideoIndex(index);
    };

    const playPreviousVideo = () => {
        const newIndex = currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1;
        setCurrentVideoIndex(newIndex);
    };

    const playNextVideo = () => {
        const newIndex = currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1;
        setCurrentVideoIndex(newIndex);
    };
    return (
       <div className="w-full lg:mt-24 md:w-3/4 mx-auto lg:p-0">
         <div className="lg:flex gap-4 p-4  lg:justify-between ">
            <VideoSection videos={videos}
                currentVideoIndex={currentVideoIndex}
                playPreviousVideo={playPreviousVideo}
                playNextVideo={playNextVideo} />
            <LeftSidebar videos={videos} playVideo={playVideo} currentVideoIndex={currentVideoIndex}/>
        </div>
        <Framework/>
        <Employees/>
        <Stats/>
        <Students/>
       </div>
    );
};

export default MainPage;