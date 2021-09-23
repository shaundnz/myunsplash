import {Flex, Heading, Image} from '@chakra-ui/react';
import React from 'react';
import Search from "../elements/Search";
import ResponsiveAddPhotoButton from "../elements/ResponsiveAddPhotoButton";

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center" flexGrow={[1,1,0,0]}>
        <Image src="unsplash-logo.png" alt="unsplash logo" h="12" w="12"/>
        <Heading as="h4" size="md" display={['none', 'none', 'block', 'block']} mr="5">MyUnsplash</Heading>
        <Search/>
      </Flex>
      <ResponsiveAddPhotoButton />
    </Flex>
  );
};

export default Header;