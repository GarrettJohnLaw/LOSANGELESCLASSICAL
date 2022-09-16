import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Container fluid className="p-0">
        <div>
          <NavBar></NavBar>
          <title>Los Angeles Classical</title>
          <main>{children}</main>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </Container>
    </>
  );
}
