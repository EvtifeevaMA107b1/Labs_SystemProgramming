import React, { useState } from 'react';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskId, setTaskId] = useState<number>(0);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskId(taskId + 1);
      setTaskText('');
    }
  };

  const markTaskComplete = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index] + ' (✔)';
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
    <div className="header">
      <h1>React Список Дел</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button type="submit">Добавить</button>
      </form>
      </div>
      <main>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task" onClick={() => markTaskComplete(index)}>
            {task}
            <button className="del" onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
};

export default TaskList;