import { Container } from "react-bootstrap";

export default function Jobs() {
  const orchestras = [
    {
      Name: "Los Angeles Philharmonic",
      url: "https://www.laphil.com/",
    },
    {
      Name: "Los Angeles Chamber Orchestra",
      url: "https://www.laco.org/?gclid=CjwKCAjwpqCZBhAbEiwAa7pXeej6Nm18q0sg8fm3Apr8WmTW19sBbTAerlP5AiUtxVD_WWAiuWltVRoCjH4QAvD_BwE",
    },
  ];
  const orchestrasList = orchestras.map((orchestra) => {
    return (
      <p>
        <a href={orchestra.url} className="text-dark">
          {orchestra.Name}
        </a>
      </p>
    );
  });
  const choirs = [
    {
      Name: "Los Angeles Master Chorale",
      url: "https://www.lamasterchorale.org/",
    },
  ];
  const choirsList = choirs.map((choir) => {
    return (
      <p>
        <a href={choir.url} className="text-dark">
          {choir.Name}
        </a>
      </p>
    );
  });
  return (
    <Container fluid>
      <head>
        <title>Links</title>
      </head>
      <h2>Orchestras</h2>
      {orchestrasList}
      <h2>Choirs</h2>
      {choirsList}
    </Container>
  );
}
