import { Container } from "react-bootstrap";

export default function Events() {
  return (
    <Container fluid>
      <head>
        <title>Events</title>
      </head>

      <div
        data-tockify-component="calendar"
        data-tockify-calendar="losangelesclassical"
      ></div>
      <script
        data-cfasync="false"
        data-tockify-script="embed"
        src="https://public.tockify.com/browser/embed.js"
      ></script>
    </Container>
  );
}
