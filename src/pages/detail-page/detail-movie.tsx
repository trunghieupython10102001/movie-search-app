import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail-movie.scss";
import { searchById } from "../../api/search";

interface Movie {
  Poster: string;
  Title: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Plot: string;
}

export const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    const getMovies = async () => {
      searchById({
        id,
      })
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    };

    getMovies();
  }, [id]);

  return (
    <div className="detail-movie">
      {movie && (
        <>
          <div className="left">
            <div className="detail-movie-poster">
              <img src={movie.Poster} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="detail-movie-title">{movie.Title}</div>
            <div className="detail-movie-plot">{movie.Plot}</div>
            <div className="detail-movie-ratings">
              {movie.Ratings.map((rating) => (
                <div>
                  <div>
                    {rating.Source}: {rating.Value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
