import React from 'react';
import Header from "../modules/Header";
import {Box} from "@chakra-ui/react";
import SearchContextProvider from "../../context/SearchContext";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({children}) => {
  return (
    <Box mt="4" mx={[0,0,8]}>
      <SearchContextProvider>
        <Header />
        {children}
      </SearchContextProvider>
    </Box>
  );
};

export default DefaultLayout;