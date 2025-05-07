// src/pages/Tasks.jsx
import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function Tasks() {
  // input alanındaki metni tutan state
  const [taskText, setTaskText] = useState('');
  // görev listesini tutan state
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const trimmed = taskText.trim();
    if (!trimmed) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false }
    ]);
    setTaskText('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Görevler</h1>
      
      {/* Yeni görev ekleme formu */}
      <form onSubmit={handleAddTask} className="mb-6 flex">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Yeni görev ekle..."
          className="flex-grow px-4 py-2 border-2 border-slate-700 rounded-l-md focus:outline-none focus:border-red-500 transition"
        />
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 rounded-r-md transition"
        >
          Ekle
        </button>
      </form>

       {/* Görevler listesi */}
       <ul>
        {tasks.length === 0 && (
          <li className="text-gray-400">Henüz eklenmiş görev yok.</li>
        )}
        {tasks.map(task => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-800 p-3 mb-2 rounded"
          >
            {/* Checkbox + metin */}
            <label
              htmlFor={`task-${task.id}`}
              className="flex items-center space-x-3 cursor-pointer flex-grow"
            >
              <input
                id={`task-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="h-5 w-5 rounded-full text-red-500 focus:ring-red-500"
              />
              <span
                className={
                  task.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-100'
                }
              >
                {task.text}
              </span>
            </label>

            {/* Silme ikonu */}
            <button onClick={() => deleteTask(task.id)}>
              <FiTrash2 className="h-5 w-5 hover:text-red-500 transition" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}