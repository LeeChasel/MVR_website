import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Link from "next/link"
import Button from 'react-bootstrap/Button'
import {FaUserAlt} from 'react-icons/fa'

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
                <Link href="/login" legacyBehavior passHref>
                    <Button variant="light" className="mx-1">
                        <FaUserAlt />
                    </Button>
                 </Link>
                </Navbar.Collapse>           
            </Container>
        </Navbar>
    )
}