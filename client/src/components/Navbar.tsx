import { Link, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks";
import Button from "./Button";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
        <div className="font-bold text-2xl">
          <h1>MERN Dashboard</h1>
        </div>
        {status ? (
          (
            <div>
              <Button type="button" handler={() => handleClickLogout()} >Logout</Button>
            </div>
          )
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-800 text-white font-medium"
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
