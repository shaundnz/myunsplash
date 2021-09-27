import {Box, BoxProps, Button, Flex, Heading, Image, Square, useToast} from '@chakra-ui/react';
import React from 'react';
import {DeleteIcon} from "@chakra-ui/icons";
import axios from "axios";
import {useSWRConfig} from "swr";

interface Props {
  imageId: number
  imageUrl: string
  imageTitle: string
}

const ImageCard:React.FC<Props & BoxProps> = ({imageId, imageUrl, imageTitle, ...props}) => {

  const toast = useToast()
  const { mutate } = useSWRConfig()

  const deleteImage = async () => {
    try {
      await axios.delete(`/api/images/${imageId}`)
      toast({
        title: "Image Deleted.",
        status: "success",
        isClosable: true
      })
      mutate("/api/images")
    } catch (err) {
      toast({
        title: "Something went wrong deleting the image.",
        description: "Please try again.",
        status: "error",
        isClosable: true
      })
    }
  }

  return (
    <Box borderRadius="xl" borderWidth="1px" position="relative" overflow="hidden" {...props} >

        <Image src={imageUrl} display="block" w="100%"/>
        <Flex display={["flex", "flex", "none"]} justifyContent="space-between" px="2" py="1">
          <Heading as="h4" size="md">
            {imageTitle}
          </Heading>
          <Square size="30px">
          <Button colorScheme="red" variant="outline" size="sm" onClick={deleteImage}>
            <DeleteIcon />
          </Button>
          </Square>
        </Flex>

        <Flex pos="absolute" w="100%" h="100%" top="0" left="0"
              justifyContent="space-between" direction="column"
              opacity="0" _hover={{background: "rgba(0,0,0,0.5)", opacity: 1}}
              p="4"
              display={["none", "none", "flex"]}
        >
          <Box alignSelf="flex-end">
            <Button colorScheme="red" w="auto" size="sm" onClick={deleteImage}>Delete</Button>
          </Box>
          <Heading color="white" as="h4" size="md">{imageTitle}</Heading>
        </Flex>

    </Box>
  );
};

export default ImageCard;