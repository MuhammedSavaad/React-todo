import React from 'react';
import './Todo.css';

function Todo() {
  return (
    <section className="main-body">
        <div className="enter_bar">
            <input type="text"
             className="enter-input-area"
             placeholder="Enter To-Do..."
            />

            <img src="/images/add.png" alt="add-button" />
        </div>

        <div className="todo-bar">
            <div className="todo">
                <p>Complete Design..</p>
                <img src="/images/trash.png" alt="trash-button" />
            </div>
        </div>
    </section>
  )
}

export default Todo;