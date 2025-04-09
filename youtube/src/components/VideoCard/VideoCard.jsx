import React from 'react';
import { Card } from 'react-bootstrap';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <Card className="video-card">
      <Card.Img 
        variant="top" 
        src={video.thumbnail} 
        className="video-thumbnail"
      />
      <Card.Body>
        <div className="d-flex">
          <img
            src={video.channelAvatar}
            alt={video.channelName}
            className="channel-avatar"
          />
          <div className="video-info">
            <Card.Title>{video.title}</Card.Title>
            <Card.Text className="channel-name">
              {video.channelName}
            </Card.Text>
            <Card.Text className="video-stats">
              {video.views} views • {video.uploadDate}
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;