import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  getTotal,
  getpage,
  nextPage,
  prevPage,
} from "../../app/services/movie";
import { MovieItem } from "../../components/movie/movie";
import "./home.scss";

export const Home = () => {
  const movies = useSelector(getMovies);
  const total = useSelector(getTotal);
  const page = useSelector(getpage);
  console.log("page", page);
  const dispatch = useDispatch();
  return (
    <div className="home">
      {movies.length === 0 ? (
        <h2 className="empty-result">There are no movie match your search</h2>
      ) : (
        <>
          <div className="movie-result">
            <h2 className="result">
              {`Page ${page}/${
                Math.floor(total / 10) + 1
              } in ${total} movies match your search`}
            </h2>
            <div className="pagin-btns">
              <button
                className="pagin-btn"
                onClick={() => dispatch(prevPage(1))}
              >
                Prev page
              </button>
              <button
                className="pagin-btn"
                onClick={() => dispatch(nextPage(1))}
              >
                Next page
              </button>
            </div>
          </div>
          <div className="movies-container">
            {movies.map((movie) => {
              return (
                <MovieItem
                  Title={movie.Title}
                  Poster={movie.Poster}
                  Year={movie.Year}
                  key={movie.imdbID}
                  Type={movie.Type}
                  imdbID={movie.imdbID}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
