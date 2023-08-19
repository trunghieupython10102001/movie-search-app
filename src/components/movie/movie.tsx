import { Link } from "react-router-dom";
import { Movie } from "../../app/services/movie";
import "./movie.scss";

export const MovieItem: React.FC<Movie> = ({
  Title,
  Type,
  Poster,
  Year,
  imdbID,
}) => {
  return (
    <div className="movie">
      <div className="poster">
        <img src={Poster} alt="poster" />
      </div>
      <Link className="title" to={imdbID}>
        {Title}
      </Link>
      <div className="year">{`Released in ${Year}`}</div>
      <div className="type">{`Type: ${Type}`}</div>
    </div>
  );
};
