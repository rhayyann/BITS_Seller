import React from 'react'
import { Container, Row, Col} from 'reactstrap'

const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                    <div className='logo'>
                            <div>
                            <h1>BITS</h1>
                            </div>
                        </div>
                    </Col>
               
                    <Col>
                        <p className="footer_copyright">
                            Copyright by BITS. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
