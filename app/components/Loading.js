import React from "react";
import PropTypes from 'prop-types'
import {FaSpinner} from 'react-icons/fa'

export default class Loading extends React.Component {
  state = {
    text: this.props.text,
  };

  static propTypes = {
      text: PropTypes.string.isRequired
  }

  static defaultProps = {
      text: 'Loading'
  }

  render() {
    return (
      <p className="load-content">
        {this.state.content} <FaSpinner className="fa-spin" />
      </p>
    );
  }
}
