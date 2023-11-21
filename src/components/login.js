import { FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function Login() {

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleCreateAccount = (event) => {
        navigate('/sign-up');
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{backgroundColor: "#1DC9B7", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
            <div className='align-items-center justify-content-center'>
                <Form onSubmit = {handleSubmit}>
                    <h1 style={{fontWeight: "bold"}}>Log In</h1>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <FormControl type="password" placeholder="Password"></FormControl>
                    </Form.Group>
                    <Form.Group>
                        <Button type = "submit">Log In</Button>
                    </Form.Group>
                </Form>
                <Form onSubmit = {handleCreateAccount} style={{paddingTop: "10px"}}>
                    <Form.Group>
                        <Form.Text className='d-block' style={{color: 'white'}}>Don't Have An Account?</Form.Text>
                        <Button className= 'btn btn-danger' type='submit'>Create Account</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login;