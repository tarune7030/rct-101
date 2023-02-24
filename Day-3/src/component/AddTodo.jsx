import React from "react";

function AddTodo(props) {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input placeholder="Add me" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          props.handleTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
