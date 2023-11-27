import {Form, FormControl} from 'react-bootstrap';
import React,{ useState } from 'react';
import HomeButton from '../components/home-button';
import FridgeSection from '../components/fridge-section';

function CreateFridge(){

    const [rangeValue, setRangeValue] = useState(3);

    const handleRangeChange = (e) => {
      setRangeValue(parseInt(e.target.value, 10));
    };

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
                    <Form.Group controlId="formRange">
                        <Form.Label>How Many Sections Are In Your Fridge?</Form.Label>
                        <FormControl
                        type="range"
                        min="1"
                        max="10"
                        value={rangeValue}
                        onChange={handleRangeChange}
                        />
                        <Form.Text className="text-muted">
                        Sections: {rangeValue}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <FridgeSection number = {2}/>
                    </Form.Group>
                </Form>
                
            </div>
        </div>
        );
}

export default CreateFridge;