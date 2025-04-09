import React, { useState } from 'react';
import { Container, Nav, Form, Button, Modal } from 'react-bootstrap';
import { BiSearch, BiVideoPlus } from 'react-icons/bi';
import { BsBell, BsPersonCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import Login from '../Login/Login';
import './Navbar.css';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-white fixed-top">
        <Container fluid>
          <div className="d-flex align-items-center">
            <button className="nav-icon-btn">
              <HiOutlineMenu size={24} />
            </button>
            <a className="navbar-brand d-flex align-items-center" href="/">
              <AiFillYoutube size={30} className="youtube-logo" />
              YouTube
            </a>
          </div>

          <div className="search-bar">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <Button variant="light" className="search-button">
                <BiSearch size={20} />
              </Button>
            </Form>
          </div>

          <div className="nav-icons">
            <button className="nav-icon-btn">
              <BiVideoPlus size={24} />
            </button>
            <button className="nav-icon-btn">
              <BsBell size={24} />
            </button>
            <button className="sign-in-btn" onClick={handleLoginClick}>
              <BsPersonCircle size={24} />
              Sign in
            </button>
          </div>
        </Container>
      </nav>

      <Modal show={showLogin} onHide={handleCloseLogin} centered>
        <Login onClose={handleCloseLogin} />
      </Modal>
    </>
  );
};

export default Navbar;