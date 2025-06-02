import { useEffect } from "react";
import { Hero } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router";
import { login, logout } from "../features/auth/authSlice";

export default function Home() {
  const state = useAppSelector((state) => state.auth);
  console.log(state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!state.userInfo) {
      dispatch(logout());
      navigate("/login");
    } else {
      dispatch(
        login({
          // username: state?.userInfo?.username,
          // _id: state?.userInfo?._id,
          // email: state?.userInfo?.email,

          ...state.userInfo
        })
      );
    }
  }, []);

  return <Hero />;
}
