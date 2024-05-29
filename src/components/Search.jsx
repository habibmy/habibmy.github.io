import React, { useEffect, useState } from "react";

const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-4 h-4 w-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const Search = ({ repos, setFilteredRepos }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const queryChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    if (!repos || !repos.length) return;

    if (searchTerm === "") {
      setFilteredRepos(repos);
      return;
    }

    let filteredRepos = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filteredRepos);
  }, [searchTerm, repos]);

  return (
    <div className="border-b-2 focus-within:border-b-black flex my-5 transition-all">
      <SearchIcon className="h-5 w-5" />
      <input
        type="text"
        className="outline-none"
        onChange={queryChange}
        value={searchTerm}
      />
      {searchTerm !== "" ? (
        <button onClick={clearSearch}>
          <CloseIcon />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
