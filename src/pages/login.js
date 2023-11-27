import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/home-button';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists in localStorage
    if (!storedUserData) {
      setLoginError('No user data found. Please sign up.');
      return;
    }

    // Check if entered credentials match stored data
    if (formData.email === storedUserData.email && formData.password === storedUserData.password) {
      // Successful login
      setLoginError('');
      navigate('/user-page');
    } else {
      // Failed login
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  const handleCreateAccount = () => {
    navigate('/sign-up');
  };

  return (
    <div>
      <HomeButton destination={'/'} />
      <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#1DC9B7", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px" }}>
        <div className='align-items-center justify-content-center'>
          <Form onSubmit={handleSubmit}>
            <h1 style={{ fontWeight: "bold" }}>Log In</h1>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Log In</Button>
            </Form.Group>
            {loginError && <Form.Text className="text-danger">{loginError}</Form.Text>}
          </Form>
          <Form style={{ paddingTop: "10px" }}>
            <Form.Group>
              <Form.Text className='d-block' style={{ color: 'white' }}>Don't Have An Account?</Form.Text>
              <Button className='btn btn-danger' onClick={handleCreateAccount}>Create Account</Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
