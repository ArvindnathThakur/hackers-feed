import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Error from "./Error";
import { fetchMainPosts } from "../utils/api";
import PostsList from "./PostsList";

export default class Posts extends React.Component {
  state = {
    posts: [],
    error: null,
    loading: true,
  };

  static propTypes = {
    type: PropTypes.oneOf(['top', 'new']),
  };

  static defaultProps = {
    type: "top",
  };

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch();
    }
  }

  handleFetch() {
    this.setState({
      posts: [],
      error: null,
      loading: true,
    });

    fetchMainPosts(this.props.type)
      .then((posts) =>
        this.setState({
          posts,
          error: null,
          loading: false,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          loading: false,
          posts: null,
        })
      );
  }

  render() {
    const { error, loading, posts } = this.state;
    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return <Error message={error} />;
    }

    return (
      <PostsList posts={posts} />
    );
  }
}
