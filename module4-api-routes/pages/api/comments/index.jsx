import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    comments.push(req.body);
    res.status(201).json(req.body);
  }
}