import React from "react";
import img from "../public/task.png";
import AddToDo from "./components/AddToDo";

const App = () => {
  return (
    <div className="bg-yellow-300 grid justify-center ">
      <div className="bg-red-200 mt-10 flex  ">
        <img src={img} width={100} height={100} />
        <p className="font-Salsa text-6xl mx-6 text-center mt-6">
          TASK TRACKER
        </p>
      </div>
      <div className="bg-red-300 mt-10 flex  ">
        <AddToDo />
      </div>
    </div>
  );
};

export default App;
