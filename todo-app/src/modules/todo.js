const Todo = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    isCompleted: false,
  };
};

export default Todo;
