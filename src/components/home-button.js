import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function HomeButton() {

    let navigate = useNavigate();

    const handleHomeClick = (event) => {
      navigate('/')
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Button className='text-center' style={{color: "white", fontSize: "55px", fontWeight: "bold", marginBottom: "25px", background: "transparent", borderStyle: "none"}} onClick={handleHomeClick}>
                Fridge Manager
            </Button>
        </div>
    );
}

export default HomeButton;