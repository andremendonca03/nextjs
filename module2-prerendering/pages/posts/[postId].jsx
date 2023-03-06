import Link from "next/link";
import { useRouter } from "next/router";

function PostDetail({post}) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }
  
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/posts">Go back Home</Link>
    </>
  )
}
 
export default PostDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resJSON = await res.json();

  const paths = resJSON.map((item) => {
    return {
      params: {
        postId: `${item.id}`,
      },
    }
  });
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await res.json();

  if (!post.id) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: {
      post,
    }
  }
}
