import React, {useContext} from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";
import {SearchContext} from "../../context/SearchContext";

const Search = () => {

  const searchContext = useContext(SearchContext)

  return (
    <InputGroup flexGrow={1} mr="2" w="300px">
      <InputLeftElement><SearchIcon color="gray.300" /></InputLeftElement>
      <Input type="text" placeholder="Search" value={searchContext.searchQuery} onChange={(e) => searchContext.searchHandler(e.target.value)}/>
    </InputGroup>
  );
};

export default Search;