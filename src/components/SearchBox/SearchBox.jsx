import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter.filters.name);
  const onChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      {" "}
      Find contacts by name
      <input
        className={css.search}
        type="text"
        placeholder="Search contacts..."
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default SearchBox;


