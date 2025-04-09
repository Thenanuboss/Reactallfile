import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCard from '../components/VideoCard/VideoCard';

const Home = () => {
  const videos = [
    {
      id: 1,
      title: 'Building a YouTube Clone with React & Bootstrap - Complete Tutorial 2024',
      thumbnail: 'https://picsum.photos/seed/1/320/180',
      channelName: 'React Mastery',
      channelAvatar: 'https://picsum.photos/seed/avatar1/36/36',
      views: '254K',
      uploadDate: '2 weeks ago'
    },
    {
      id: 2,
      title: 'Learn Web Development in 2024 - Complete Roadmap from Beginner to Advanced',
      thumbnail: 'https://picsum.photos/seed/2/320/180',
      channelName: 'Code Academy',
      channelAvatar: 'https://picsum.photos/seed/avatar2/36/36',
      views: '1.2M',
      uploadDate: '3 months ago'
    },
    {
      id: 3,
      title: '10 JavaScript Projects to Build Your Portfolio - With Source Code',
      thumbnail: 'https://picsum.photos/seed/3/320/180',
      channelName: 'JavaScript Pro',
      channelAvatar: 'https://picsum.photos/seed/avatar3/36/36',
      views: '750K',
      uploadDate: '1 month ago'
    },
    {
      id: 4,
      title: 'React vs Vue vs Angular - Which Framework to Choose in 2024?',
      thumbnail: 'https://picsum.photos/seed/4/320/180',
      channelName: 'Tech Compare',
      channelAvatar: 'https://picsum.photos/seed/avatar4/36/36',
      views: '500K',
      uploadDate: '5 days ago'
    },
    {
      id: 5,
      title: 'Build and Deploy a Full Stack MERN Application',
      thumbnail: 'https://picsum.photos/seed/5/320/180',
      channelName: 'Full Stack Mastery',
      channelAvatar: 'https://picsum.photos/seed/avatar5/36/36',
      views: '325K',
      uploadDate: '1 week ago'
    },
    {
      id: 6,
      title: 'CSS Grid and Flexbox - Complete Guide with Real Examples',
      thumbnail: 'https://picsum.photos/seed/6/320/180',
      channelName: 'CSS Wizard',
      channelAvatar: 'https://picsum.photos/seed/avatar6/36/36',
      views: '425K',
      uploadDate: '2 months ago'
    },
    {
      id: 7,
      title: 'TypeScript Tutorial for Beginners - Full Course',
      thumbnail: 'https://picsum.photos/seed/7/320/180',
      channelName: 'TypeScript Guru',
      channelAvatar: 'https://picsum.photos/seed/avatar7/36/36',
      views: '280K',
      uploadDate: '3 weeks ago'
    },
    {
      id: 8,
      title: 'Modern UI/UX Design Principles - Practical Guide',
      thumbnail: 'https://picsum.photos/seed/8/320/180',
      channelName: 'Design Masters',
      channelAvatar: 'https://picsum.photos/seed/avatar8/36/36',
      views: '198K',
      uploadDate: '4 days ago'
    }
  ];

  return (
    <Container fluid>
      <Row>
        {videos.map(video => (
          <Col key={video.id} xs={12} sm={6} md={4} lg={3}>
            <VideoCard video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;