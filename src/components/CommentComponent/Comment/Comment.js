import { useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  const nav = useNavigate();
  return (
    <div onClick={() => nav(`post/${id}`)}>
      <h3>
        {id}. {body}
      </h3>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Name:</b> {name}
      </p>
    </div>
  );
};

export { Comment };
