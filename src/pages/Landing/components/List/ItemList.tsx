import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { CardItem } from './CardItem';

export const ItemList = () => {
  const [size, setSize] = React.useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize)
    onOpen()
  }

  return (
    <>
      <Button
        onClick={() => handleClick(size)}
        key="full"
        m={4}
        rounded="full"
        size="lg"
        fontWeight="normal"
        px={6}
      >{`Notre carte d'aujourd'hui`}</Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {`Notre menu d'aujourd'hui`}
          </DrawerHeader>
          <DrawerBody>
            <CardItem />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

}
