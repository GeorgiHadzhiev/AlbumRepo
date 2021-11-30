import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Header(){

    return(

        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AlbumRepo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="#pricing">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    )

}