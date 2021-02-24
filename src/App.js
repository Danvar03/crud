import React, { useState } from "react";
import { isEmpty, size } from "lodash";
import shortid from "shortid";

function App() {
  const [task, settask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (isEmpty(task)) {
      console.log("Task empty");
      return;
    }
    const newTask = {
      id: shortid.generate(),
      name: task,
    };
    setTasks([...tasks, newTask]);
    settask("");
  };

  const deleteTask = (id) => {
    const fileteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(fileteredTasks);
  };

  return (
    <div className="container mt-5">
      <h1>Tareas </h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>

          {size(tasks) == 0 ? (
            <h5 className="text-center"> Aun no hay tareas programadas</h5>
          ) : (
            <ul className="list-group">
              {tasks.map((task) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={() => deleteTask(task.id)}
                  >
                    Eliminar
                  </button>
                  <button className="btn btn-warning btn-sm float-right">
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-4">
          <h4 className="text-center"> Agregar Tarea</h4>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-contol mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(text) => settask(text.target.value)}
              value={task}
            />
            <button className="btn btn-dark btn-block" type="submit">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
