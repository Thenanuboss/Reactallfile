import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AiFillYoutube } from 'react-icons/ai';
import './Login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <AiFillYoutube size={40} className="login-logo" />
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">to continue to YouTube</p>
      </div>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Button type="submit" className="login-button">
          Sign In
        </Button>

        <a href="#forgot-password" className="forgot-password">
          Forgot password?
        </a>

        <div className="create-account">
          Don't have an account?
          <a href="#create-account">Create one</a>
        </div>
      </Form>
    </div>
  );
};

export default Login;