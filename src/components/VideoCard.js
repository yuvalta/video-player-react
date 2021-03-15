import React from "react";

class VideoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <span className="video-card">
          <img src={this.props.url} />
        </span>
        <span className="video-card">
          <h2>{this.props.title}</h2>
        </span>
      </div>
    );
  }
}
export default VideoCard;
