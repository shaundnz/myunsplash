import {SimpleGrid, useBreakpointValue} from '@chakra-ui/react';
import React from 'react';

const ImageStack = () => {

  useBreakpointValue([1, 2, 3])



  return (
    <SimpleGrid columns={[1,2,3]} spacing="5" alignItems="start">

    </SimpleGrid>
  );
};

export default ImageStack;