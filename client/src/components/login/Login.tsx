import { useState, type FormEvent } from "react";
import Input from "../Input";
import Button from "../Button";

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      email,
      password
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto my-0">
      <h2 className="text-2xl text-center font-bold">Login</h2>
      <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        placeholder="Enter your password"
      />
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  );
}
