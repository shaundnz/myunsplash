import {
  Button,
  FormControl, FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import React from 'react';
import {AddIcon} from "@chakra-ui/icons";
import {SubmitHandler, useForm} from "react-hook-form";
import Joi from "joi"
import {joiResolver} from '@hookform/resolvers/joi'
import axios from "axios";
import {useImages} from "../../hooks/useImages";
import {useSWRConfig} from "swr";

interface FormInput {
  imageURL: string
  label: string
}

const schema = Joi.object({
  imageURL: Joi.string().uri().required(),
  label:  Joi.string().required()
})

const ResponsiveAddPhotoButton = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const {register, handleSubmit, reset, formState: {errors}} = useForm<FormInput>({
    resolver: joiResolver(schema)
  })

  const toast = useToast()
  const { mutate } = useSWRConfig()

  const onSubmit: SubmitHandler<FormInput> = async (data) => {

    try {
      const res = await axios.post("/api/images", {
        ...data
      })
      toast({
        title: "Photo Uploaded!",
        status: "success",
        isClosable: true
      })
      onClose()
      reset()
      mutate("/api/images")
    } catch (err) {
      toast({
        title: "Error, Something went wrong.",
        status: "error",
        isClosable: true
      })
    }
  }

  return (
    <>
      <Button colorScheme="green" size="md" display={['none', 'none', 'block', 'block']} onClick={onOpen}>Add
        Photo</Button>
      <IconButton
        colorScheme="green"
        size="sm" h="10" w="10"
        aria-label="Add Photo"
        icon={<AddIcon/>}
        display={['block', 'block', 'none', 'none']}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Add a new photo</ModalHeader>
          <ModalCloseButton/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <FormControl isInvalid={!!errors.label}>
                <FormLabel>Label</FormLabel>
                <Input {...register("label")}/>
                <FormErrorMessage>{errors.label?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.imageURL}>
                <FormLabel>Photo URL</FormLabel>
                <Input {...register("imageURL")}/>
                <FormErrorMessage>{errors.imageURL?.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" size="md" type="submit">Submit</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResponsiveAddPhotoButton;