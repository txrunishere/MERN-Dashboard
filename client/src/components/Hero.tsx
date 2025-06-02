import { useAppSelector } from "../hooks";

export default function Hero() {
  const state = useAppSelector(state => state.auth.userInfo)

  return (
    <section className="flex items-center justify-center mt-[5rem]">
      <div className="p-[2rem] text-center text-black bg-gray-100 rounded text-lg max-w-4xl shadow-md">
        <h1>Welcome, { state?.username }!</h1>
        <p>Email: { state?.email }</p>
      </div>
    </section>
  );
}
// TODO: Make them dynamic
