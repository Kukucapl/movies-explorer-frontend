export default function FilterCheckbox(props) {
    return (
      <label className="filter">
        <input className="filter__checkbox" onChange={props.onCheckbox} checked={props.isShortMovies} type="checkbox" />
        <div className="filter__fake-checkbox" />
        <p className="filter__text">Короткометражки</p>
      </label>
    );
};
