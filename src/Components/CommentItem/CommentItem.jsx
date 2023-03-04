import React from "react";
import "./CommentItem.css";
import { formatDistanceToNow } from "date-fns";

const CommentItem = (props) => {
  const { commentDetails } = props;
  const { id, name, comment, isLiked, initialClassName, date } = commentDetails;
  const initial = name ? name[0].toUpperCase() : "";
  const likeImageUrl = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";
  const likeTextClassName = isLiked ? "button active" : "button";
  const postedTime = formatDistanceToNow(date);

  const onClickLike = () => {
    const { toggleIsLiked } = props;
    toggleIsLiked(id);
  };

  const onClickDelete = () => {
    const { deleteComment } = props;
    deleteComment(id);
  };

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <span className="initial">{initial}</span>
        </div>
        <div>
          <div className="username-time-container ">
            <h1 className="username">{name}</h1>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container ">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>

        <button
          className="button"
          type="button"
          // data-testId="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="comment-line " />
    </li>
  );
};

export default CommentItem;
