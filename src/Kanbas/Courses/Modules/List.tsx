import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} className="btn btn-success">
           Add
        </button>
        <button onClick={() => dispatch(updateModule(module))} className="btn btn-primary">
                Update
        </button>

        <input value={module.name} 
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} className="input-group input-group-sm mb-3"
        />
        <textarea value={module.description} className="input-group input-group-sm mb-3"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>

        {moduleList.filter((module) => module.course === courseId)
            .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setModule(module)}>
                          <button
              onClick={() => dispatch(setModule(module))} className="btn btn-success">
              Edit
            </button>

                          <button
              onClick={() => dispatch(deleteModule(module._id))} className="btn btn-danger">
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {deleteModule === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;