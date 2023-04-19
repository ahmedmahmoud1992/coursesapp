import { useState } from "react";

function FormAddCourse(props) {
  const [newCourse, setNewCourse] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (newCourse === "") return;
    props.onSubmit(newCourse);
    setNewCourse("");
  }

  return (
    <form onSubmit={submitHandler} id="form-add-course">
      <input
        placeholder="Add a new course"
        type="text"
        value={newCourse}
        id="input-add-course"
        onChange={(e) => setNewCourse(e.target.value)}
      />
      <button id="btn-add-course">Add</button>
    </form>
  );
}

export default FormAddCourse;
