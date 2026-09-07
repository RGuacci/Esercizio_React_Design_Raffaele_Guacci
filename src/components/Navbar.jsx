import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar bg-slate-900 shadow-sm fixed top-0 right-0 left-0 z-3">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">{/* menu */}</button>
      </div>

      <div className="flex-1">
        <a className="btn btn-ghost text-xl">React Design</a>
      </div>

      {/* Links */}
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link to="/">Home</Link>
        </li>

        {user ? (
          <>
            <li>
              <p>{user.name}</p>
            </li>

            <li>
              <Link to="info">Lista Anime</Link>
            </li>

            <li onClick={logout}>
              <Link to="/">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="register">Registrati</Link>
            </li>
          </>
        )}
      </ul>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">{/* more */}</button>
      </div>
    </nav>
  );
}
