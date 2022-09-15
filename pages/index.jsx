import { useSession, signIn, signOut } from "next-auth/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
  }
  console.log(session);

  return (
    <>
      {/* {status === "unauthenticated" && } */}
      {status === "loading" && <></>}
      {status === "authenticated" && (
        <Container fluid>
          <Row>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container fluid>
                <Col>
                  <Navbar.Brand href="#home">
                    Los Angeles Classical
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Jobs</Nav.Link>
                      <Nav.Link href="#link">Events</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
                <Col width="2">
                  <p className="text-white">{session.user.name}</p>
                </Col>
              </Container>
            </Navbar>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
