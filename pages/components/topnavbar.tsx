import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Link from "next/link"
import {FaUserAlt} from 'react-icons/fa'

export default function TopNavbar()
{
    return (
        <Navbar className="bg-secondary">
            <Container>
                <Navbar.Brand>
                    <h1 className="text-white">MVR</h1>
                </Navbar.Brand>
                <Navbar.Text className="px-4 text-white fw-bolder">
                    <h4>Music in your mind, Space on your definition</h4>
                </Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Link href="/" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder text-white">首頁</span>
                            </Nav.Link>
                        </Link>
                        <Link href="/features" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder text-white">功能介紹</span>
                            </Nav.Link>
                        </Link>
                        <Link href="/introduceTeam" legacyBehavior passHref>
                            <Nav.Link>
                                <span className="fs-5 fw-bolder text-white">團隊成員</span>
                            </Nav.Link>
                        </Link>
                        <Link href="/userPage/login" legacyBehavior passHref>
                            <Nav.Link>
                                <FaUserAlt className="mx-1 mb-2 text-white"/>
                                <span className="fs-5 fw-bolder text-white">設定</span>
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>           
            </Container>
        </Navbar>
    )
}