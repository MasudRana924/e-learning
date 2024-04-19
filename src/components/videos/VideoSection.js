
import { useSelector } from 'react-redux';
import './video.css'
const VideoSection = ({ videos, currentVideoIndex, playPreviousVideo, playNextVideo }) => {
    const currentVideo = videos[currentVideoIndex];
    const isFirstVideo = currentVideoIndex === 0;
    const isLastVideo = currentVideoIndex === videos.length - 1;
    const { token, user } = useSelector(
        (state) => state.user
    );


    return (
        <div className="w-full">
            <div className="video-container h-96 ">
                {(isFirstVideo || token) && (
                    <iframe
                        src={currentVideo.videoUrl}
                        title="Porao"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameborder="0"
                        className=' w-full h-full'
                    ></iframe>
                )}
                {!isFirstVideo && !token && (
                    <div className="pt-32">
                        <p className="text-red-600 text-3xl flex flex-col justify-center items-center font-mono">This video requires need authentication to play</p>
                        <a href='/login'>
                        <button className="px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 sm:text-base sm:px-6 bg-white mt-4">Login</button>
                        </a>
                    </div>
                )}
            </div>
            <div className="flex justify-between  m-4">
                <button
                    className={isFirstVideo ? "px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 sm:text-base sm:px-6 bg-gray-400 " : "px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 sm:text-base sm:px-6 bg-white"}
                    onClick={playPreviousVideo}
                    disabled={isFirstVideo}
                >
                    Previous
                </button>
                {!isLastVideo && (
                    <button
                        className={isLastVideo ? "px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 sm:text-base sm:px-6 bg-gray-400 " : "px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 sm:text-base sm:px-6 bg-white"}
                        onClick={playNextVideo}
                        disabled={isLastVideo}
                    >
                        Next Lesson
                    </button>
                )}
            </div>
            <div className="video-info m-4">
                <h2 className="video-title text-gray-400 text-start ">{currentVideo.title}</h2>
                <p className=" text-gray-400 text-start ">{currentVideo.description}</p>
            </div>
        </div>
    );
};

export default VideoSection;