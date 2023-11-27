import {Form, Button} from 'react-bootstrap';

function FridgeSection(props) {

    const {number} = props

    const handleSubmit = (event) => {
        alert('Successfully submitted form')
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Section {number}</h1>
                <Form.Group>
                    <Form.Label>
                        Section Name
                    </Form.Label>
                    <Form.Control
                        type = 'text'
                        placeholder='nickname'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Width
                    </Form.Label>
                    <Form.Control
                        type = 'text'
                        placeholder='w'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Length
                    </Form.Label>
                    <Form.Control
                        type = 'text'
                        placeholder='l'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Depth
                    </Form.Label>
                    <Form.Control
                        type = 'text'
                        placeholder='d'
                    />
                </Form.Group>
                <Form.Group>
                    <Button 
                        type = 'submit'
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default FridgeSection;