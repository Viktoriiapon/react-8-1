import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";


import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homePageContainer}>
      <h1 className={css.header}>Welcome!</h1>
      {isLoggedIn ? (
        <NavLink to="/contacts">
          <p className={css.text}>
       Your contacts  
          </p>
        </NavLink>
      ) : (
        <p className={css.text}>To get started, you must login or register.</p>
      )}
    </div>
  );
};

export default HomePage;

  