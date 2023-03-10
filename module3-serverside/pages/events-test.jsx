import useSWR from "swr";
import {useState} from "react";
import {useRouter} from "next/router";

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:4000/events`);

    if (!res.ok) {
      throw new Error("Bad Fetch Response");
    }
    const data = await res.json();
    
    return {
      props: {
        events: data,
      }
    }

  } catch (err) {
    throw new Error(err);
  }
}

async function fetcher() {
  const res = await fetch(`http://localhost:4000/events?category=sports`);
  const data = await res.json();
  return data;
}

function Events({events}) {
  const {data, error} = useSWR("fetchSports", fetcher);
  const [filter, setFilter] = useState(false);

  function fetchSportsEvents(e) {
    e.preventDefault();
    setFilter("sports");
  }

  if (error) return error;
  if (!data) return "Loading...";

  if (filter) {
    return (
      <>
        <button onClick={() => setFilter(false)}>Back</button>
        {data.map(item => {
          return <div key={item.id}>
            <h2>{item.id} {item.title} {item.date} {item.category}</h2>
            <p>{item.description}</p>
            <hr />
          </div>
        })}
      </>
    )
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