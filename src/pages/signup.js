import Form, { FormGroup } from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import HomeButton from '../components/home-button';


function SignUp() {

    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        navigate('/user-page');
    }

    return(
        <div>
            <HomeButton destination={'/'}/>
            <div className="container d-flex align-items-center justify-content-center" style={{backgroundColor: "#1DC9B7", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
                <Form onSubmit={handleSubmit}>
                    <h1 style={{fontWeight: "bold"}}>Create Account</h1>
                    <Form.Group className='mb-3' controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='name@example.com'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='password'></Form.Control>
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password2'>
                        <Form.Label>Re-Enter Password</Form.Label>
                        <Form.Control type='password' placeholder='Re-Enter password'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='userPic'>
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type='file'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='submitButton'>
                        <Button type='submit'>Create Account</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
        );
}

export default SignUp;