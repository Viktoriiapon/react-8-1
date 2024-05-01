import { NavLink } from "react-router-dom";
import { getNavLinkClassName } from "../Navigation/Navigation";
import css from "./AuthNav.module.css"
export const AuthNav = () => {
  return (
    <div>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};

