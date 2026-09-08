import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar bg-slate-900 text-white shadow-md">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">{/* menu */}</button>
      </div>

      <div className="flex-1">
        <Link to="/" className="btn btn-white text-xl">React Design</Link>
      </div>

      {/* Links */}
      <ul className="menu menu-horizontal px-1 text-white">
       

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

            <li>
              <Link to="login">Accedi</Link>
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
