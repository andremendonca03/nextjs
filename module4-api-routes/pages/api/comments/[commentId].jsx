import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  const currentItem = comments.find(item => {
    return item.id === parseInt(commentId);
  });

  if (currentItem) {
    if (req.method === "GET") {
      res.status(200).json(currentItem);
    }
  
    if (req.method === "DELETE") {
      const index = comments.findIndex(item => item.id === currentItem.id);
      comments.splice(index, 1);
      res.status(200).json(currentItem);
    }
  } else {
    res.status(404).end("Endpoint Not Found");
  }
}