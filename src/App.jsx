"use client";
import React, { useState } from "react";
import "./App.css";

function App() {
  const submitHandler = (event) => {
    event.preventDefault();
    setTitle("");
    setDescription("");
    setMainTasks([...mainTasks, { title: title, description: description,iscomplete:"complete" }]);
    console.log(mainTasks);
  };
const deletehandler=(index)=>{
  
   mainTasks.splice(index,1)
   setMainTasks([...mainTasks])
}
const completehander=(index)=>{
  mainTasks[index].iscomplete="completed"
  setMainTasks([...mainTasks])
  setIsDisabled(true)
}

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTasks, setMainTasks] = useState([]);
 const [isDisabled, setIsDisabled] = useState(false);
//  const [label, setLabel] = useState('Complete');
  let renderTask = <h5 className="text-gray-500">No tasks yet</h5>;
  if (mainTasks.length > 0) {
   renderTask = mainTasks.map((task, index) => (
      <div key={index}  className={` flex justify-between p-4 rounded-lg shadow-md my-2 ${mainTasks[index].iscomplete==="completed" ? 'bg-slate-300' : 'bg-white'}`}>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{task.title}</h4>
          <h5 className="text-gray-600">{task.description}</h5>
        </div>
        <div className="flex flex-row gap-2"> <button className="text-white-700 p-2 px-3 rounded-md h-fit bg-red-400 hover:font-bold hover:bg-red-600" onClick={()=>{
          deletehandler(index)
        }} >delete</button>
       
        <button className="text-white-700 p-2 px-3 rounded-md h-fit bg-green-200 hover:font-bold hover:bg-green-600" onClick={()=>{
          completehander(index)
        }}  >{mainTasks[index].iscomplete}</button> 
        </div>
       
      </div>
    ));
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center bg-blue-500 text-white p-5 rounded-md shadow-md ">
        My Todo List
      </h2>
      <form className="bg-gray-100 flex  gap-4 p-6 rounded-md shadow-md mx-auto lg:w-1/2 mt-6 flex-col sm:w-4/5" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your task title"
          className="bg-white text-gray-800 placeholder-gray-400 border-gray-300 border-2 p-4 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your task description"
          className="bg-white text-gray-800 placeholder-gray-400 border-gray-300 border-2 p-4 rounded-md focus:outline-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 text-white w-full p-3 rounded-md hover:bg-blue-600 transition duration-200"
        />
      </form>
         <hr className="h-5 bg-slate-200"></hr>
      <div className="mx-auto w-1/2 mt-6">
        {renderTask}
      </div>
    
    </>
  );
}

export default App;
