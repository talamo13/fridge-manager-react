import Form from 'react-bootstrap/Form';
import HomeButton from '../components/home-button';

function CreateFridge(){

    const handleSubmit = (event) => {
        alert('Hello World')
    }

    return(
        <div>
            <HomeButton destination={'/user-page'}/>
            <div className="container d-flex align-items-center justify-content-center" style={{backgroundColor: "#1DC9B7", borderRadius: "15px", paddingTop: "10px", paddingBottom: "10px"}}>
                <Form onSubmit={handleSubmit}>
                    <h1 style={{fontWeight: "bold"}}>Create Fridge</h1>
                    <Form.Group>
                        <Form.Label>Fridge Name:</Form.Label>
                        <Form.Control type='text' placeholder='nickname'></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </div>
        );
}

export default CreateFridge;