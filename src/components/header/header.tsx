import React, { useEffect, useState } from "react";
import "./header.scss";
import { search } from "../../api/search";
import { useDebounce } from "../../hooks/debouce";
import { useDispatch } from "react-redux";
import { setMovies } from "../../app/services/movie";

export const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const searchQuery = useDebounce(query, 500);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  useEffect(() => {
    const getMovies = async () => {
      search({
        title: searchQuery,
        page,
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setMovies(data.Search ?? []));
        });
    };

    getMovies();
  }, [searchQuery, dispatch, page]);

  return (
    <div className="header">
      <div className="header-content-wrapper">
        <h1 className="header-logo">IMDb Search</h1>
        <div className="header-search">
          <input
            type="text"
            name="search"
            onChange={onChange}
            value={query}
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};
