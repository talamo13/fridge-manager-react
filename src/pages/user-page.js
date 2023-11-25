import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/home-button';

function UserPage() {

    let navigate = useNavigate();

    const handleCreateFridge = (event) => {
        navigate('/create-fridge')
    }

    return (
        <div>
            <HomeButton destination={'/user-page'}/>
            <div className="container align-items-center justify-content-center" style={{backgroundColor: "#1DC9B7", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
                <h1 className = 'text-center'>User Page</h1>
                <div className='row justify-content-around'>
                    <div className='col d-flex'>
                        <Card style = {{width: "17rem", borderRadius: "20px"}}>
                            <Card.Img variant='top' src=''/>
                            <Card.Body style={{backgroundColor: "#39A1F4", borderRadius: "20px"}}>
                                <Card.Title style = {{color:'white'}}>My Fridge</Card.Title>
                                <Card.Text>
                                    Click here to access your fridge!
                                </Card.Text>
                                <Button variant='primary'>Go Now!</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                    <div className='col d-flex align-items-center card-container justify-content-center'>
                        <Card style = {{width: "17rem", borderRadius: "20px"}}>
                            <Card.Img variant='top' src=''/>
                            <Card.Body style={{backgroundColor: "#39A1F4", borderRadius: "20px"}}>
                                <Card.Title style = {{color:'white'}}>Create Fridge</Card.Title>
                                <Card.Text>
                                    Use This To Create A Fridge
                                </Card.Text>
                                <Button variant='primary' onClick={handleCreateFridge}>Go Now!</Button>
                            </Card.Body>
                        </Card> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;