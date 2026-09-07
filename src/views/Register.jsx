import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email);

    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registrati Ora!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />

                <label className="label">Nome</label>
                <input type="text" className="input" placeholder="Nome" onChange={(e)=>setName(e.target.value)} />

                <button className="btn btn-neutral mt-4">Registrati</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
