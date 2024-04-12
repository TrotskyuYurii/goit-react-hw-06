import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ onChangeFilter }) => (
  <section>
    <h4>Find contacts by name</h4>
    <input type="text" placeholder="Search..." onInput={onChangeFilter} />
  </section>
);

export default SearchBox;
