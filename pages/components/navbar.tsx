import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Link from "next/link"

export default function TopNavbar()
{
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">首頁</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/features">功能介紹</Nav.Link>
                        <Link href="/introduceTeam" passHref>
                            <Nav.Link >製作團隊</Nav.Link>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}