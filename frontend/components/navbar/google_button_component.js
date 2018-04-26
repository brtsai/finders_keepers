import React from "react";
import { Link } from "react-router-dom";

class GoogleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google">
            <button className="auth-button">login with google</button>
          </a>
        );
      default:
        return (
          <a href="/api/logout">
            <button className="auth-button">Log Out</button>
          </a>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default GoogleButton;
