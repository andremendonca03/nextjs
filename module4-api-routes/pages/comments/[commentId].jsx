import { comments } from "@/data/comments";

export async function getStaticPaths() {
  const paths = comments.map(item => {
    return {
      params: {commentId: `${item.id}`}
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {params} = context;

  const comment = comments.find(item => item.id === parseInt(params.commentId));

  /* DON'T CALL OWN API WITH FETCH
  const res = await fetch(`http://localhost:3000/api/comments/${params.commentId}`);
  const data = await res.json();
  */

  return {
    props: {
      comment,
    }
  }
}

function Comment({comment}) {


  return (
    <>
      <h1>{comment.id} - {comment.text}</h1>
    </>
  )
}

export default Comment;
