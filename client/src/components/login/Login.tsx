import { useState, type FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import { useHandleLoginUserMutation } from "../../features/api/apiSlice";
import { useAppDispatch } from '../../hooks'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginUserTrigger] = useHandleLoginUserMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await loginUserTrigger({
        email,
        password
      }).unwrap()
      dispatch(login({
        _id: res.user._id,
        email: res.user.email,
        username: res.user.username
      }))
      navigate('/')
    } catch (error) {
      console.log("Error while login User: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-0">
      <h2 className="text-2xl text-center font-bold">Login</h2>
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
