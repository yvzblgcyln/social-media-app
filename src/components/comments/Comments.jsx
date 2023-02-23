import { useContext, useState } from "react";
import CurrentUserContext from "../../context/authContext";
import { Link } from "react-router-dom";
import "./comments.scss";

const Comments = ({ comments, setCommentCount, commentCount }) => {
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState(comments);
  const { currentUser } = useContext(CurrentUserContext);

  const handleComment = () => {
    const commentObject = {
      id: 5,
      name: currentUser.name,
      profilePicture: currentUser.profilePic,
      desc: comment,
      time: "now",
    };
    const temp = [...postComments, commentObject];
    setPostComments(temp);
    setCommentCount(commentCount + 1);
    setComment("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <button onClick={handleComment}>Send</button>
      </div>
      {postComments
        .map((comment, index) => (
          <div className="comment" key={index}>
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <Link to={`/profile/${index}`} style={{ color: "inherit", textDecoration: "none" }}>
                <span>{comment.name}</span>
              </Link>
              <p>{comment.desc}</p>
            </div>
            <span className="date">{comment.time}</span>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default Comments;
