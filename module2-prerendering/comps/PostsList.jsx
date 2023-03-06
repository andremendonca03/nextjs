import Link from "next/link";

function User({posts}) {
  return (
    <ul>
      {posts.map(item => {
        return (
          <li key={item.id}>
            <Link href={`/posts/${item.id}`} style={{"display": "block"}}>
              <h4>{item.title}</h4>
              <strong>{item.userId}</strong>
              <p>{item.body}</p>
              <br />
              <br />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default User;
