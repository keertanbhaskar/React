import { useState } from 'react'
import './App.css'

function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTask = () =>{
    if(newTask.trim()){
      setTasks([
        ...tasks,
        {id:Date.now(),text:newTask,completed:false},
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId) =>{
    setTasks(tasks.map((task) =>
      task.id === taskId
      ? {...task, completed: !task.completed}
      : task
    ));
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className=" font-sans max-w-125 mx-12.5 my-12 p-5 border-2 border-solid border-gray-400 bg-gray-100 shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-center rounded-md ">
          <h2 className="text-blue-500 text-2xl font-semibold mb-5`">
            To-Do List
          </h2>

          <div className="flex justify-center mb-5">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="w-[70%] p-2.5 border-2 border-solid border-gray-400 rounded-md text-xl outline-0"
            />
            <button
              className="px-2.5 py-4 ml-2.5 bg-blue-400  hover:bg-blue-500 ease-in-out transition-colors duration-200 text-white border-none rounded-md cursor-pointer "
              onClick={addTask}
            >
              Add Task
            </button>
          </div>

          <ul className="list-none pl-0 m-0 ">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between bg-white p-3 my-2.5 rounded border border-gray-300 shadow transition-transform duration-200 ease-in-out ${
                  task.completed ? "completed" : ""
                }`}
              >
                <span
                  className="cursor-pointer text-xl text-gray-500 hover:text-gray-700 transition-colors duration-150"
                  onClick={() => toggleTaskComplete(task.id)}
                >
                  {task.text}
                </span>
                <button
                  className="text-lg text-red-400 cursor-pointer transition-colors duration-300 hover:text-red-600"
                  onClick={() => deleteTask(task.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
