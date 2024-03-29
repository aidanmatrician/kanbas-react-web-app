import { Link } from "react-router-dom";
import Nav from "../nav";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
function Kanbas() {
  return (
<div>
      {/* Nav component will be displayed above everything else */}
      <Nav/>

      {/* This div wraps the rest of your layout */}
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/*" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Kanbas;