import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-content-wrapper">
        <h1 className="header-logo">IMDb Search</h1>
        <div className="header-search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-btn">Search IMDb</button>
        </div>
      </div>
    </div>
  );
};
