import React from "react";

class UserIcon extends React.Component {
  render() {
    return (
      <button>
        <p>{this.props.auth._id}</p>
      </button>
    );
  }
}

export default UserIcon;
