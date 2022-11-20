import { Outlet, Link } from "react-router-dom";
import "./Wrapper.css";

export const Wrapper = () => {
  return (
    <div className="container">
      <div className="menu-wrapper">
        <Link to={"/"}>System OAUTH2.2</Link>
        <Link to={"/login"}>Zaloguj się</Link>
      </div>
      <Outlet />
    </div>
  );
};