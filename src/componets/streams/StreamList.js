import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions/";
import { Link } from "react-router-dom";

class StreamList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderButtons = (stream) => {
    if (stream.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to="/" className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create stream
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    userId: state.authReducer.userId,
    isSignedIn: state.authReducer.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
