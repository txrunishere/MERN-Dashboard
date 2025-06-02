import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import { Home, Login, Register } from "../pages";

export default function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
