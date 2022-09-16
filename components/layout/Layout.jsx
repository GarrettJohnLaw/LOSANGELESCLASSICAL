import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <Container
      fluid
      className="p-0 m-0 d-flex flex-column min-vh-100 vw-100 justify-content-between"
    >
      <div>
        <NavBar></NavBar>
        <title>Los Angeles Classical</title>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </Container>
  );
}
