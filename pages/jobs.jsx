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

      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-3bce22ff-8ebd-4827-8e6b-770b7e43634c"></div>
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
