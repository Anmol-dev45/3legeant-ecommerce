"use client";

import Image from "next/image";

import search from "../public/svgs/search-02.svg";
const Search = () => {
  return <Image src={search} alt="search icon" height={24} width={24} />;
};

export default Search;
