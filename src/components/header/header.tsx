import React, { useEffect, useState } from "react";
import "./header.scss";
import { search } from "../../api/search";
import { useDebounce } from "../../hooks/debouce";
import { useDispatch, useSelector } from "react-redux";
import { getpage, setMovies, setTotal } from "../../app/services/movie";

export const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const page = useSelector(getpage);
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
          dispatch(setTotal(data.totalResults ?? 0));
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
