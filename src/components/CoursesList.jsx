import { Fragment } from "react";
import Course from "./Course";

function CoursesList({ courses, onDelete, onUpdate, confirm }) {
  return (
    <Fragment>
        <h2>My courses</h2>
        <ul className="courses-list">
            {!courses.length && "No courses ..."}
            {courses.map(({id, courseName})=> <Course key={id} courseName={courseName} onDelete={onDelete} id={id} />)}
        </ul>
    </Fragment>
  );
}

export default CoursesList;
