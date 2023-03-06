import PostsList from "../../comps/PostsList";

function Posts({posts}) {
  return (
    <>
      <h1>Blog Posts Page</h1>
      <h2>All Current Posts:</h2>
      <PostsList posts={posts} />
    </>
  )
}

export default Posts;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resJSON = await res.json();

  return {
    props: {
      posts: resJSON,
    }
  }
}
