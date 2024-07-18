import React, { useEffect, useState } from 'react';
import axios from 'axios';

const References = ({ maxDisplay }) => {
  const [videos, setVideos] = useState([]);

  const apiKey = 'AIzaSyCtNibSvq8VFh4H8u2uK_E5pZTzV2QIRuA'; // Replace with your YouTube Data API key

  useEffect(() => {
    const loadYouTubeClient = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=learn+stock+market+investing&type=video,playlist&maxResults=${maxDisplay}&key=${apiKey}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube videos', error);
      }
    };

    loadYouTubeClient();
  }, []);


  return (
    <div>
      <div className="section mb-8">
        <h2 className="text-xl font-semibold mb-4">YouTube Videos</h2>
        <div className="scroll-container grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.slice(0, maxDisplay).map((item) => {
            const videoId = item.id.videoId || item.id.playlistId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.default.url;
            const channelTitle = item.snippet.channelTitle;
            const videoType = item.id.kind.includes('video') ? 'Video' : 'Playlist';
            const link = `https://www.youtube.com/${videoType === 'Video' ? 'watch?v=' + videoId : 'playlist?list=' + videoId}`;
            return (
              <div key={videoId} className="scroll-item border p-4 rounded-lg">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={thumbnail} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <p>{title} ({videoType})</p>
                  <p>Channel: {channelTitle}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default References;
