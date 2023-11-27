import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/home-button';

function SignUp() {
  let navigate = useNavigate();

  // Use state to manage form data and password error
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
    userPic: null,
  });

  const [passwordError, setPasswordError] = useState('');

  // Update the state when form fields change
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

// Validate password on blur (when the focus leaves the field)
const validatePassword = () => {
    const { password, password2 } = formData;
  
    // Check if passwords match
    if (password !== password2) {
      setPasswordError("Passwords don't match");
    } else {
      setPasswordError('');
    }
  
    // Check password criteria (you can adjust these criteria as needed)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Your password must be between 8 and 20 characters long and include at least one letter and one number.'
      );
    }
  };


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate password before submission
    validatePassword();

    // If there's a password error, do not proceed with the submission
    if (passwordError) {
        console.log('Password validation error:', passwordError);
        return;
    }

    // Store data in localStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    console.log('Form Data:', formData);

    // Navigate to the user-page
    navigate('/user-page');
  };

  return (
    <div>
      <HomeButton destination={'/'} />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: '#1DC9B7',
          borderRadius: '15px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h1 style={{ fontWeight: 'bold' }}>Create Account</h1>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={(e) => {
                handleChange(e);
                validatePassword();
              }}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password2">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-Enter password"
              name="password2"
              value={formData.password2}
              onChange={(e) => {
                handleChange(e);
                validatePassword();
              }}
            />
            {passwordError && (
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="userPic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" name="userPic" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="submitButton">
            <Button type="submit">Create Account</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
