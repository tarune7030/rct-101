function TodoItem({ id, title, status, handleToggle, handleDelete }) {
  return (
    <li key={id}>
      {title} - {status ? "Completed" : "Not Completed"}
      <button onClick={() => handleToggle(id)}>TOGGLE</button>
      <button onClick={() => handleDelete(id)}>DELETE</button>
    </li>
  );
}

export default TodoItem;
