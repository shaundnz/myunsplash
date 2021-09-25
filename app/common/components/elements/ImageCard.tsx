import {Box, BoxProps, Button, Flex, Heading, Image} from '@chakra-ui/react';
import React from 'react';

interface Props {
  imageUrl: string
  imageTitle: string
}

const ImageCard:React.FC<Props & BoxProps> = ({imageUrl, imageTitle, ...props}) => {
  return (
    <Box borderRadius="xl" position="relative" overflow="hidden" {...props} >
        <Flex pos="absolute"
              w="100%" h="100%"
              justifyContent="space-between" direction="column"
              opacity="0" _hover={{background: "rgba(0,0,0,0.5)", opacity: 1}}
              p="4"
        >
          <Box alignSelf="flex-end">
            <Button colorScheme="red" w="auto" size="sm">Delete</Button>
          </Box>
          <Heading color="white" as="h4" size="md">Heading</Heading>
        </Flex>
        <Image src={imageUrl} w="100%"/>
    </Box>
  );
};

export default ImageCard;