import EventCard from "../components/events/EventCard";

export default function Event(props) {
  let events = [];
  props.events.map((event, index) => {
    const eventCard = <EventCard event={event} key={index}></EventCard>;
    events.push(eventCard);
  });

  return (
    <>
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
    </>
  );
}

export async function getServerSideProps(context) {
  const event = {
    Name: "Event Name",
    Description: "Description",
  };
  return {
    props: { events: [event] }, // will be passed to the page component as props
  };
}