import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../apis/comment";
import CommentItem from "./CommentItem";

export default function CommentList({ newComment }) {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const handleGetComment = async () => {
      const response = await getComments(postId || "");
      setComments(response.data.comments);
    };
    handleGetComment();
  }, [postId]);

  useEffect(() => {
    if (newComment.id) {
      setComments((prevComments) => [newComment, ...prevComments]);
    }
  }, [newComment]);

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          actionComment={handleDeleteComment}
        />
      ))}
    </>
  );
}
