import { useDispatch } from "react-redux"; 
import { changeFilter } from "../../redux/filtersSlice"; 

import css from "../SearchBox/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <section>
      <h4>Find contacts by name</h4>
      <input type="text" placeholder="Search..." onInput={onChangeFilter} />
    </section>
  );
};

export default SearchBox;
