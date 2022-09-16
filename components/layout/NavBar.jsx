import { useSession, signIn, signOut } from "next-auth/react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import moment from "moment-timezone";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
  }
  // const session = {
  //   user: { name: "Anonymous User" },
  // };
  // const status = "authenticated";
  const name = session?.user?.name || "Friend";
  const firstName = name?.split(" ")[0];
  var time = moment().hours();
  let greeting = `Hi there, ${firstName}!`;
  if (time < 12) {
    greeting = `Good morning, ${firstName}`;
  } else if (time < 17) {
    greeting = `Good afternoon, ${firstName}`;
  } else {
    greeting = `Good evening, ${firstName}`;
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Col>
          <Navbar.Brand href="/">Los Angeles Classical</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
        <Col
          width="2"
          className="d-flex justify-content-end align-items-center"
        >
          {status === "unauthenticated" && (
            <Button variant="primary">Login</Button>
          )}
          {status === "authenticated" && (
            <>
              <p className="text-white align-self-center my-0 mx-2">
                {greeting}
              </p>
              <Button variant="secondary" size="sm" onClick={() => signOut()}>
                Logout
              </Button>
            </>
          )}
        </Col>
      </Container>
    </Navbar>
  );
}
