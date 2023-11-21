import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function MainMenu(){

    let navigate = useNavigate();
    const handleLogin = (event) => {
        navigate('/login');
    }

    const handleSignUp = (event) => {
        navigate('/sign-up');
    }

    return (
        <div className="d-block align-items-around justify-content-center" style={{backgroundColor: "#1DC9B7", borderRadius: "15px", padding: "20px"}}>
            <div className="d-grid gap-1">
                <Button variant="primary" size="lg" onClick={handleLogin}>Log In</Button>
                <Button variant="secondary" size="lg" onClick={handleSignUp}>Sign Up</Button>
            </div>
        </div>
    );
}

export default MainMenu;