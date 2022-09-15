import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <title>Los Angeles Classical</title>

      <main>{children}</main>
    </>
  );
}
