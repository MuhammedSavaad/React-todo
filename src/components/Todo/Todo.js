import React, { useState, useEffect } from 'react';
import './Todo.css';

function Todo() {
  const [toDos,setToDos]=useState(JSON.parse(localStorage.getItem('TodoList')) || []);
  const [toDo,setToDo]=useState('');
  
  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(toDos));
  }, [toDos]);

  function deleteHandler(id){
    const removeItem = toDos.filter((TodoList) => {
      return TodoList.id !== id;
    })
    setToDos(removeItem);
  }

  function updateHandler(event, value){
    console.log(event.target.checked);
    const updateHandling = toDos.filter((TodoList) => {
      if(TodoList.id === value.id){
        TodoList.status = event.target.checked;
      }

      return TodoList;
    })

    setToDos(updateHandling);
  }

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

            <img onClick={()=>{
              setToDos([...toDos, {id:Date.now(), text:toDo, status:false}]);
              localStorage.setItem("TodoList", JSON.stringify([...toDos, {id:Date.now(), text:toDo, status:false}]));
              setToDo('');
            }} src="/images/add.png" alt="add-button" />
        </div>

        <div className="todo-bar">
            {
              toDos.map((value, index)=>{
                return(
                  <div className="todo" key={index}>
                    <p>{value.text}</p>
                    <label className="container">
                      { value.status
                        ?<input onChange={(e)=>updateHandler(e, value)} value={value.status} type="checkbox" checked /> 
                        :<input onChange={(e)=>updateHandler(e, value)} value={value.status} type="checkbox" />}
                      <span className="checkmark"></span>
                    </label>
                    <img onClick={() => deleteHandler(value.id)} src="/images/trash.png" alt="trash-button" />
                  </div>
                )
              })
            }

            {/* ----------------------------------
            // Show Completed Tasks
            {toDos.map((value) => {
              if(value.status){
                return(
                  <h1>{value.text}</h1>
                )
              }

              return null;
            })}
            ----------------------------------- */}
        </div>
    </section>
  )
}

export default Todo;