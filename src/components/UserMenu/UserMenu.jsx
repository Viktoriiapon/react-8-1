import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userBox}>
      <span className={css.span}>Hello, {user.name}</span>
      <button onClick={onLogout} type="button" className={css.logout}>
        Logout
      </button>
    </div>
  );
};

