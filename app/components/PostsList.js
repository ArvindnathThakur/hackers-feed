import React from "react";
import PropTypes from "prop-types";
import PostInfo from "./PostInfo";

export default function PostsList({ posts }) {
  if (posts.length === 0) {
    return <p className="center-text">This user hasn't posted yet</p>;
  }

  return (
    <ul>
      {posts.map(({title, id, time, by, url, descendants}) => {
        return (
          <li key={id} className="post">
            <PostInfo title={title} id={id} time={time} by={by} url={url} descendants={descendants} />
          </li>
        );
      })}
    </ul>
  );
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};
