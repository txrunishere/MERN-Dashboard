import { useEffect } from "react";
import { Hero } from "../components";
import { useAppSelector } from "../hooks"
import { useNavigate } from "react-router";

export default function Home() {
  const { status } = useAppSelector(state => state.auth)
  console.log(status)
  const navigate = useNavigate()

  useEffect(() => {
    if (status === false) {
      navigate('/login');
    }
  }, [status, navigate])

  return (
    <Hero />
  )
}
