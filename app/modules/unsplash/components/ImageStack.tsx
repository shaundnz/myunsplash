import {SimpleGrid, useBreakpointValue} from '@chakra-ui/react';
import React from 'react';
import ImageCard from "../../../common/components/elements/ImageCard";

const ImageStack = () => {

  useBreakpointValue([1, 2, 3])



  return (
    <SimpleGrid columns={[1,2,3]} spacing="5" alignItems="start">
      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1632196068630-a2bacc1d0c92?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        imageTitle="Camping"
      />
      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1632381662862-aa849ae6262d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        imageTitle="Camping"
      />
      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1632381662862-aa849ae6262d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        imageTitle="Camping"
      />
    </SimpleGrid>
  );
};

export default ImageStack;