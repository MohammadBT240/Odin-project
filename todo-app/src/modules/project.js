import Todo from "./todo";

const Project = (name) => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(Todo(todo.title, todo.description, todo.dueDate, todo.priority));
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
  };

  const getTodos = () => {
    return todos;
  };

  return {
    name,
    addTodo,
    removeTodo,
    getTodos,
  };
};

export default Project;
