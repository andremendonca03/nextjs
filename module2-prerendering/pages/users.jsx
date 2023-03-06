import User from "../comps/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {users.map((item) => {
          return <li key={item.id}><User user={item} /></li>;
        })}
      </ul>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const resJSON = await res.json();

  return {
    props: {
      users: resJSON,
    },
  };
}
