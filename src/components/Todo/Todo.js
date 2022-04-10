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

            <img onClick={()=>{
              setToDos([...toDos, {id:Date.now(), text:toDo, status:false}]);
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
                      <input onChange={(e)=>{
                        console.log(e.target.checked);
                        console.log(value);
                        setToDos(toDos.filter(obj=>{
                          if(obj.id===value.id){
                            obj.status=e.target.checked;
                          }
                          return obj;
                        }))
                      }} value={value.status} type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                    <img onClick={() =>{
                      setToDos(toDos.filter(obj => {
                        let temp;
                        if (obj.id != value.id){
                          temp = obj
                        }
                        return temp;
                      }));
                    }} src="/images/trash.png" alt="trash-button" />
                  </div>
                )
              })
            }

            {/* {toDos.map((value) => {
              if(value.status){
                return(
                  <h1>{value.text}</h1>
                )
              }

              return null;
            })} */}
        </div>
    </section>
  )
}

export default Todo;