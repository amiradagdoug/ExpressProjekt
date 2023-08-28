

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';




function Contacts() {


    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>


                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img
                            src="/img/homePage.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>ccccc</Card.Title>
                            <Card.Text>
                                amira@yahoo.fr
                                <br />215141515415.25
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default Contacts;