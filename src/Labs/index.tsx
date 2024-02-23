import { Link, Route, Routes } from "react-router-dom";
import Nav from "../nav";
import Assignment3 from "./a3";
import TodoList from "./a3/todos/TodoList";

function Labs() {
    return (
      <div className="container-fluid">
        <Nav />
        <Link to="/Labs/a3">Assignment 3</Link> |
        <Link to="/Labs/a4">Assignment 4</Link>
        <Routes>
          <Route path="/a3/*" element={<Assignment3 />} />
          {/* <Route path="/a4" element={<Assignment4 />} /> */}
        </Routes>
        <TodoList/>
      </div>
    );
  }
  export default Labs;
  
  