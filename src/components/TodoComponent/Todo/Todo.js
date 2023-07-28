const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <div>
      <h3>
        {id}. {title}
      </h3>
      <p>Completed: {completed ? "yes" : "no"}</p>
    </div>
  );
};

export { Todo };
