import { useEffect, useState } from "react";

import { todoService } from "../../services/todoService";
import { Todo } from "./Todo/Todo";

const TodoComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      todoService.getAll().then(({ data }) => setTodos(data));
    } catch {}
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export { TodoComponent };
