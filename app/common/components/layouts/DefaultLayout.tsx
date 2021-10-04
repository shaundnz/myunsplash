import React from 'react';
import Header from "../modules/Header";
import {Box} from "@chakra-ui/react";
import SearchContextProvider from "../../context/SearchContext";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({children}) => {
  return (
    <>
    <Head>
      <title>MyUnsplash</title>
      <meta property="og:title" content="MyUnsplash" key="title" />
      <link rel="icon" href="/unsplash-logo.png" />
    </Head>
    <Box mt="4" mx={[0,0,8]}>
      <SearchContextProvider>
        <Header />
        {children}
      </SearchContextProvider>
    </Box>
    </>
  );
};

export default DefaultLayout;