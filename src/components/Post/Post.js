import { Component } from "react";

class Post extends Component {
  render() {
    const { id, title, body } = this.props.post;
    return (
      <div>
        <h2>
          {id}. {title}
        </h2>
        <p>{body}</p>
      </div>
    );
  }
}

export { Post };
