import {Navbar,Container,Nav} from 'react-bootstrap'
import { motion } from 'framer-motion';

export default function Header(){

    return(

        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>

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

        </motion.div>

    )

}