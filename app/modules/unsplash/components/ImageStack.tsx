import {Heading, SimpleGrid, Stack, useBreakpointValue, VStack} from '@chakra-ui/react';
import React, {useState} from 'react';
import ImageCard from "../../../common/components/elements/ImageCard";
import useSWR from 'swr'
import {useImages} from "../../../common/hooks/useImages";
import {Image} from "../../../common/types/Image";
import {create} from "domain";

const ImageStack = () => {

  // Breakpoint
  const cols = useBreakpointValue([1,2,3])

  const {images, isError, isLoading} = useImages()

  const createImageStack = () => {
    const stack: JSX.Element[][] = []

    if (!cols){
      return stack
    }

    for (let i = 0; i < cols; i ++) {
      stack.push([])
    }

    let index = 0

    images?.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    images?.forEach(image => {
      stack[index].push(<ImageCard key={image.id} imageId={image.id} imageUrl={image.imageURL} imageTitle={image.label}/>)
      index += 1
      if (index >= cols) {
        index = 0
      }
    })

    return stack
  }

  if (isLoading) {
    return <Heading as="h3" size="lg">Fetching Images</Heading>
  }

  if (isError) {
    return <>{isError.toString()}</>
  }

  return (
    <SimpleGrid columns={[1,2,3]} spacing="4" alignItems="start" py="4">
      {createImageStack().map((col, index) => (<VStack key={index} spacing="4">{col}</VStack>))}
    </SimpleGrid>
  );
};

export default ImageStack;