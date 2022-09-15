export default function EventCard(props) {
  const event = props.event;
  return (
    <>
      <p>{event.Name}</p>
      <p>{event.Description}</p>
    </>
  );
}
