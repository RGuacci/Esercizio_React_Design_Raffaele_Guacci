import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    login(data);
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Accedi Ora!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register("email", {
                    required: "La mail è obbligatoria",
                    maxLength: {
                      value: 50,
                      message: "La mail non può superare i 50 caratteri",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Nome"
                  {...register("password", {
                    required: "La password è obbligatoria",
                    maxLength: {
                      value: 50,
                      message: "La password non può superare i 50 caratteri",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
