import { useSelector } from "react-redux";
import { getMovies } from "../../app/services/movie";

export const Home = () => {
  const movies = useSelector(getMovies);
  console.log(movies);
  return <div className="Home"></div>;
};
