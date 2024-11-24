import React, { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (text.trim()) {
      addTodo(text.trim()); // Calls the addTodo function passed as a prop
      setText(''); // Resets the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Updates the state as the user types
        placeholder="Add a new todo"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          marginRight: '10px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
