import React, { useState } from "react";

export default function Checklist() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Fazer compras", completed: false },
    { id: 2, name: "Lavar o carro", completed: true },
    { id: 3, name: "Pagar contas", completed: false },
  ]);

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleEdit = (id) => {
    // lógica para editar a tarefa
  };

  const handleCheckboxChange = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.name}
          </span>
          <button onClick={() => handleEdit(task.id)}>Editar</button>
          <button onClick={() => handleDelete(task.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}


