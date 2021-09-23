import {Button, IconButton} from '@chakra-ui/react';
import React from 'react';
import {AddIcon} from "@chakra-ui/icons";

const ResponsiveAddPhotoButton = () => {
  return (
    <>
      <Button colorScheme="green" size="md" display={['none', 'none', 'block', 'block']}>Add Photo</Button>
      <IconButton
        colorScheme="green"
        size="sm" h="10" w="10"
        aria-label="Add Photo"
        icon={<AddIcon/>}
        display={['block', 'block', 'none', 'none']}
      />
    </>
  );
};

export default ResponsiveAddPhotoButton;