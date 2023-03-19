import { useState } from "react";

function CommentsPage() {
  const [commentsList, setCommentsList] = useState([]);
  const [newComment, setNewComment] = useState("");

  async function fetchComments() {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    setCommentsList(data);
  }

  async function sendComment() {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        text: newComment,
      })
    });
    setNewComment("");
  }

  async function handleDelete(itemId) {
   await fetch(`http://localhost:3000/api/comments/${itemId}`, {
    method: "DELETE",
   });
   fetchComments();
  }

  return (
    <>
      <input type="text" value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={sendComment}>Submit</button>

      <br /> <br />

      <button onClick={fetchComments}>Load Comments</button>
      {commentsList.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.text}</h1>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default CommentsPage;
