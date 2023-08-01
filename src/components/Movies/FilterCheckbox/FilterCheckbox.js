export default function FilterCheckbox() {
    return (
      <label className="filter">
        <input className="filter__checkbox" type="checkbox" />
        <div className="filter__fake-checkbox" />
        <p className="filter__text">Короткометражки</p>
      </label>
    );
};
  