function TodoItem({ id, title, status, handleToggle, handleDelete }) {
  return (
    <li key={id}>
      {title} - {status ? "Completed" : "Not Completed"}
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
