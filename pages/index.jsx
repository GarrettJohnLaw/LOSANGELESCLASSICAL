import { Container } from "react-bootstrap";

export default function Events() {
  return (
    <Container fluid>
      <head>
        <title>Los Angeles Classical</title>
        <meta name="description" content="Your source for classical concerts and events in Los Angeles. "></meta>
        <meta name="robots" content="index, follow" />
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
