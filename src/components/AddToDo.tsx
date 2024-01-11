import React, { useState } from "react";

const AddToDo = () => {
  const [tododata, setTododata] = useState("");

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter Your Task"
            className="rounded-md px-4 py-2 border-spacing-2 border-2"
            value={tododata}
            onChange={(e) => {
              setTododata(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
};

export default AddToDo;
