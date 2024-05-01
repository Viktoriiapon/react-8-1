    import { NavLink } from "react-router-dom";
    

    import { selectIsLoggedIn } from "../../redux/auth/selectors";
    import { useSelector } from "react-redux";
    
    import css from "./Navigation.module.css";
    import clsx from "clsx";

    export const getNavLinkClassName = ({ isActive }) =>
    clsx(css.navLink, {
      [css.active]: isActive,
    });
     const Navigation = () => {
        const isLoggedIn = useSelector(selectIsLoggedIn);
      
        return (
          <nav>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className={getNavLinkClassName} to="/contacts">
                Contacts
              </NavLink>
            )}
          </nav>
        );
      };
      
      
      export default Navigation;







