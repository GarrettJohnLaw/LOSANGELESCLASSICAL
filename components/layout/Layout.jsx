import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <title>Layouts Example</title>

      <main>{children}</main>
    </>
  );
}
