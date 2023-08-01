import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <div className="search-form">
      <form className="search-form__form">
        <div className="search-form__film">
          <input className="search-form__input" placeholder="Фильм" />
          <button className="search-form__button button" type="submit">Найти</button>
        </div>
        <FilterCheckbox/>
      </form>

    </div>
  );
};
