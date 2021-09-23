import React from 'react';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/input";
import {SearchIcon} from "@chakra-ui/icons";

const Search = () => {
  return (
    <InputGroup flexGrow={1} mr="2" w="300px">
      <InputLeftElement><SearchIcon color="gray.300" /></InputLeftElement>
      <Input placeholder="Search"/>
    </InputGroup>
  );
};

export default Search;