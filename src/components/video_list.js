import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    console.log('list',props);

    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} 
            />)
    });
    console.log('utems',VideoItems);


    return (
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    );
};

export default VideoList;