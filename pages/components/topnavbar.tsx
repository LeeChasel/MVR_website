import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Link from "next/link"

export default function TopNavbar()
{
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <h1>MVR</h1>
                </Navbar.Brand>
                <Navbar.Text className="px-4 "><h4>Music in your mind, Space on your Definition</h4></Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link href="/" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder">首頁</span>
                            </Nav.Link>
                        </Link>
                        <Link href="/features" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder">功能介紹</span>
                            </Nav.Link>
                        </Link>
                        <Link href="/introduceTeam" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder">
                                    製作團隊
                                </span>
                                </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}