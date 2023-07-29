import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <div className="Movies">
        <SearchForm />
        <MoviesCardList />
    </div>
    );
};