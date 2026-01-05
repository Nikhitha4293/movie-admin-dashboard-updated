import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* TITLE */}
      <div className="sidebar-title">
        <h1 className="text-2xl font-bold">Movie Admin</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Dashboard Panel
        </p>
      </div>

      {/* MENU */}
      <nav className="sidebar-menu">
        <NavLink to="/" end className="sidebar-link">
          Dashboard
        </NavLink>

        <NavLink to="/movies" className="sidebar-link">
          Movies
        </NavLink>

        <NavLink to="/calendar" className="sidebar-link">
          Calendar
        </NavLink>

        <NavLink to="/kanban" className="sidebar-link">
          Kanban
        </NavLink>

        <NavLink to="/analytics" className="sidebar-link">
          Analytics
        </NavLink>
      </nav>

      {/* FOOTER */}
    </aside>
  );
}
