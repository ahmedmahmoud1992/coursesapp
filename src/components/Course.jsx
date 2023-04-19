import { Fragment } from "react";

function Course({ id, courseName, onDelete }) {
  return (
    <Fragment>
      <li>
        <p>{courseName}</p>
        <button className="btn btn-del" onClick={() => onDelete(id)}>
          delete
        </button>
        <button className="btn btn-update" onClick={() => onUpdate(id)}>
          update
        </button>
      </li>
    </Fragment>
  );
}

export default Course;
