import { Fragment, useState } from "react";

function Course({ id, courseName, onDelete, fnEdit }) {
    const [isEditEnabled, setEditEnabled] = useState(false);
    const [newCourseName, setNewCourseName] = useState("");
    const showEdit = ()=> {
        setEditEnabled(true)
    }
  return (
    <Fragment>
        {isEditEnabled? 
      <li className="li-update">
        <input type="text" defaultValue={courseName} onChange={e=>setNewCourseName(e.target.value)} />
        <button className="btn btn-update" onClick={()=>{fnEdit(id, newCourseName), setEditEnabled(false)}}>
          Edit
        </button>
      </li>
      :
      <li>
        <p>{courseName}</p>
        <button className="btn btn-del" onClick={() => onDelete(id)}>
          delete
        </button>
        <button className="btn btn-update" onClick={showEdit}>
          Edit
        </button>
      </li>
    }
    </Fragment>
  );
}

export default Course;
