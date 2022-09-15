import { useSession, signIn, signOut } from "next-auth/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import moment from "moment-timezone";
import Button from "react-bootstrap/Button";
import Router from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    signIn();
  }
  const name = session?.user?.name;
  const firstName = name?.split(" ")[0];
  var time = moment().hours();
  let greeting;
  if (time < 12) {
    greeting = `Good morning, ${firstName}`;
  } else if (time < 17) {
    greeting = `Good afternoon, ${firstName}`;
  } else {
    greeting = `Good evening, ${firstName}`;
  }
  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const now = moment().tz(timezone).format();
  // console.log(now);

  return (
    <>
      {/* {status === "unauthenticated" && } */}
      {status === "loading" && <></>}
      {status === "authenticated" && (
        <Container fluid>
          <Row>
            
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
