import { Component } from "react";
import "./Comments.css";
import { v4 } from "uuid";
//import { formatDistanceToNow } from "date-fns";
import CommentItem from "../CommentItem/CommentItem";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

class Comments extends Component {
  state = {
    nameInput: "",
    commentInput: "",
    commentsList: [],
  };

  deleteComment = (commentId) => {
    const { commentsList } = this.state;
    this.setState({
      commentsList: commentsList.filter(
        (eachComment) => eachComment.id !== commentId
      ),
    });
  };

  toggleIsLiked = (id) => {
    const { commentsList } = this.state;

    this.setState((prevState) => ({
      commentsList: prevState.commentsList.map((eachComment) => {
        if (id === eachComment.id) {
          return { ...eachComment, isLiked: !eachComment.isLiked };
        }
        return eachComment;
      }),
    }));
  };

  // renderCommentsList = () => {
  //   const { commentsList } = this.state;

  //   return commentsList.map((eachComment) => (
  //     <CommentItem
  //       key={eachComment.id}
  //       commentDetails={eachComment}
  //       toggleIsLiked={this.toggleIsLiked}
  //       deleteComment={this.deleteComment}
  //     />
  //   ));
  // };

  onAddComment = (event) => {
    event.preventDefault();
    const { nameInput, commentInput } = this.state;

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1
        )
      ]
    }`;

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    };

    this.setState((prevState) => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: "",
      commentInput: "",
    }));
  };

  onChangeCommentInput = (event) => {
    this.setState({
      commentInput: event.target.value,
    });
  };

  onChangeNameInput = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };
  render() {
    const { nameInput, commentInput, commentsList } = this.state;
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="comment-heading">Comments</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
          <hr className="horizintal-line" />
          <p className="count-heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map((eachComment) => {
              <CommentItem
                key={eachComment.id}
                commentDeatils={eachComment}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
              />;
            })}

            <ul className="comments-list">
              {commentsList.map((eachComment) => (
                <CommentItem
                  key={eachComment.id}
                  commentDetails={eachComment}
                  toggleIsLiked={this.toggleIsLiked}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>

            {/* <ul className="comments-list">{this.renderCommentsList()}</ul> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
