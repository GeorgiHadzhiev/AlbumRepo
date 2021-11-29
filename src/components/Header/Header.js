import {Navbar,Container,Nav} from 'react-bootstrap'

export default function Header(){

    return(

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">AlbumRepo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="#pricing">Register</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )

}