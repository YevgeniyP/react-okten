import { Component } from "react";

class Comment extends Component {
  render() {
    const { id, name, email, body } = this.props.comment;
    return (
      <div>
        <h2>
          {id}. {name}
        </h2>
        <h3>{email}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export { Comment };
