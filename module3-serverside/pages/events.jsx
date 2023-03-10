import useSWR from "swr";
import {useState} from "react";
import {useRouter} from "next/router";

export async function getServerSideProps({query}) {
  const {category} = query;
  const queryString = category ? 'category=sports': '';

  try {
    const res = await fetch(`http://localhost:4000/events?${queryString}`);

    if (!res.ok) {
      throw new Error("Bad Fetch Response");
    }
    const data = await res.json();
    
    return {
      props: {
        eventList: data,
      }
    }

  } catch (err) {
    throw new Error(err);
  }
}

function Events({eventList}) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const res = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await res.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, {shallow: true});
  }

  return (
    <>
    <button onClick={fetchSportsEvents}>Sports Event</button>
      <h1>List of Events</h1>
      {events.map(item => {
        return <div key={item.id}>
          <h2>{item.id} {item.title} {item.date} {item.category}</h2>
          <p>{item.description}</p>
          <hr />
        </div>
      })}
    </>
  )
}

export default Events;