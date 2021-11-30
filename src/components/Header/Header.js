import {Navbar,Container,Nav} from 'react-bootstrap'
import styles from './Header.module.css'

export default function Header(){

    return(

        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AlbumRepo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login" className={styles.login}>Login</Nav.Link>
                        <Nav.Link href="/register" className={styles.register}>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    )

}