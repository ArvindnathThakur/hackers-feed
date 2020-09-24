import React from "react";
import PropTypes from "prop-types";
import { ThemeConsumer } from "../contexts/theme";
import Title from "./Title";
import PostMetaInfo from "./PostMetaInfo";

export default class PostInfo extends React.Component {
  PropTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    descendants: PropTypes.any,
  };

  render() {
    const { title, id, time, by, url, descendants } = this.props;
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className={`block block-inline block-${theme}`}>
            <Title url={url} title={title} id={id} />
            <PostMetaInfo
              by={by}
              time={time}
              id={id}
              descendants={descendants}
            />
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
