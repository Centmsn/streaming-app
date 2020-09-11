import React, { Component } from "react";
import { createStream } from "../../actions/";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  handleSubmit = (values) => {
    this.props.createStream(values);
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
