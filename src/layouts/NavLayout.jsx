import { Outlet } from "react-router-dom";
import { NavBottom } from "../components/Nav";

export default function NavLayout() {
  return (
    <>
      <Outlet></Outlet>
      <NavBottom />
    </>
  );
}
