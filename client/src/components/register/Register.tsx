import { Button, Input } from "../";
import { useState, type FormEvent } from "react";
import { useHandleRegisterUserMutation } from "../../features/api/apiSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

export default function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const [registerUserTrigger] = useHandleRegisterUserMutation();
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await registerUserTrigger({
        username,
        email,
        password,
      }).unwrap();
      dispatch(
        login({
          _id: res.userData._id,
          email: res.userData.email,
          username: res.userData.username,
        })
      );
      navigate('/')
    } catch (error) {
      console.log("Error while Register User: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-0">
      <h2 className="text-2xl text-center font-bold">Register</h2>
      <Input
        label="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder="Enter your username"
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
      />
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
