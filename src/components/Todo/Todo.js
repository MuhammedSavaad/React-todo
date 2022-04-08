import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [toDos,setToDos]=useState([]);
  const [toDo,setToDo]=useState('');

  return (
    <section className="main-body">
        <div className="enter_bar">
            <input
             value={toDo}
             onChange={(event)=>setToDo(event.target.value)}
             type="text"
             className="enter-input-area"
             placeholder="Enter To-Do..."
            />

            <img onClick={()=>setToDos([...toDos, toDo])} src="/images/add.png" alt="add-button" />
        </div>

        <div className="todo-bar">
            {
              toDos.map((value, index)=>{
                return(
                  <div className="todo" key={index}>
                    <p>{value}</p>
                    <img src="/images/trash.png" alt="trash-button" />
                  </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Todo;