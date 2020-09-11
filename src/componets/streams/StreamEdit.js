import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    console.log(this.props.fetchStream(this.props.match.params.id));
  }

  handleSumbit = (values) => {
    this.props.editStream(this.props.match.params.id, values);
  };

  render() {
    if (!this.props.stream) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm
          onSubmit={this.handleSumbit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
