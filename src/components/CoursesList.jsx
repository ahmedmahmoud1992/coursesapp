import { Fragment } from "react";
import Course from "./Course";

function CoursesList({ courses, onDelete, fnEdit }) {

  return (
    <Fragment>
      <h2>My courses</h2>
      <ul className="courses-list">
        {!courses.length && "No courses ..."}
        {courses.map(({ id, courseName }) => (
          <Course
            key={id}
            id={id}
            courseName={courseName}
            onDelete={onDelete}
            fnEdit={fnEdit}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default CoursesList;
