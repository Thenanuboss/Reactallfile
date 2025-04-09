import React from 'react';
import { Nav } from 'react-bootstrap';
import { 
  AiFillHome,
  AiOutlineHistory,
  AiOutlineLike,
  AiFillFire
} from 'react-icons/ai';
import { 
  MdSubscriptions, 
  MdVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineVideoLibrary
} from 'react-icons/md';
import { BsPlayBtn } from 'react-icons/bs';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link href="/" className="active">
          <AiFillHome /> Home
        </Nav.Link>
        <Nav.Link href="/shorts">
          <BsPlayBtn /> Shorts
        </Nav.Link>
        <Nav.Link href="/subscriptions">
          <MdSubscriptions /> Subscriptions
        </Nav.Link>

        <div className="section-divider"></div>

        <Nav.Link href="/library">
          <MdVideoLibrary /> Library
        </Nav.Link>
        <Nav.Link href="/history">
          <AiOutlineHistory /> History
        </Nav.Link>
        <Nav.Link href="/your-videos">
          <MdOutlineVideoLibrary /> Your videos
        </Nav.Link>
        <Nav.Link href="/watch-later">
          <MdOutlineWatchLater /> Watch later
        </Nav.Link>
        <Nav.Link href="/liked">
          <AiOutlineLike /> Liked videos
        </Nav.Link>

        <div className="section-divider"></div>
        
        <div className="section-title">Explore</div>
        <Nav.Link href="/trending">
          <AiFillFire /> Trending
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;