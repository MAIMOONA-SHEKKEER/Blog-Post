import { SearchBar } from "@/styled-components/Serachbar";
import React, { FC, useState } from "react";

type SearchProps = {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
};

const SearchBox: FC<SearchProps> = ({ setSearchQuery, searchQuery }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchBar
      type="text"
      placeholder="Search by title or content"
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
