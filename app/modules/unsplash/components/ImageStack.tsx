import {Heading, SimpleGrid, useBreakpointValue, VStack} from '@chakra-ui/react';
import React, {useContext, useEffect, useState} from 'react';
import ImageCard from "../../../common/components/elements/ImageCard";
import {useImages} from "../../../common/hooks/useImages";
import {Image} from "../../../common/types/Image";
import {SearchContext} from "../../../common/context/SearchContext"

type CreateImageStack  = (cols: number, images: Image[], searchQuery: string) => Image[][]

const createImageStack: CreateImageStack = (cols, images, searchQuery) => {

  const newFilteredStack: Image[][] = []

  if (!cols){
    return newFilteredStack
  }

  // Set the appropriate number of columns for the breakpoint
  for (let i = 0; i < cols; i ++) {
    newFilteredStack.push([])
  }

  let index = 0

  // Filter images and sort in order of most recent added first
  const filteredImages = images?.filter(image => image.label.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

  filteredImages?.forEach(image => {
    newFilteredStack[index].push(image)
    index += 1
    if (index >= cols) {
      index = 0
    }
  })

  return newFilteredStack
}

const ImageStack = () => {

  // Breakpoint
  const cols = useBreakpointValue([1,2,3])

  const [filteredImageStack, setFilteredImageStack] = useState<Image[][]>([])
  const {images, isError, isLoading} = useImages()

  const searchContext = useContext(SearchContext)

  useEffect(() => {
    if (cols == null || images == null){
      return
    }
    setFilteredImageStack(createImageStack(cols, images, searchContext.searchQuery))
  }, [images, cols, searchContext.searchQuery])

  if (isLoading) {
    return <Heading as="h3" size="lg">Fetching Images</Heading>
  }

  if (isError) {
    return <>{isError.toString()}</>
  }


  return (
    <SimpleGrid columns={[1,2,3]} spacing="4" alignItems="start" py="4">
      {filteredImageStack.map((col, index) => (<VStack key={index} spacing="4">{col.map(image => <ImageCard
        key={image.id} imageId={image.id} imageUrl={image.imageURL} imageTitle={image.label} w="100%"/>)}</VStack>))}
    </SimpleGrid>
  );
};

export default ImageStack;