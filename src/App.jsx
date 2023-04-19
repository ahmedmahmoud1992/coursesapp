import { useEffect, useState } from "react";
import FormAddCourse from "./components/FormAddCourse";
import CoursesList from "./components/CoursesList";

function App() {
  const [courses, setCourses] = useState(JSON.parse(localStorage.getItem("COURSES")) || []);
  const addNewCourse = (course)=> {
    setCourses([...courses, {
      id: crypto.randomUUID(),
      courseName: course
    }])
  }
  const deleteCourse = (id)=> {
    console.log(id);
    setCourses(courses.filter(course=> id !== course.id))
  }
  useEffect(()=> {localStorage.setItem("COURSES", JSON.stringify(courses))}, [courses])
  return (
    <div className="App">
      <h1>Add Courses App</h1>
      <FormAddCourse onSubmit={e => addNewCourse(e)} />
      <CoursesList courses={courses} onDelete={deleteCourse}/>
    </div>
  );
}

export default App;
