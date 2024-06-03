import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Drawer1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <MdDashboard />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign={'center'}>Dashobard</DrawerHeader>

          <DrawerBody>
            <VStack>
              <Link to="/dashboard/projects">
                <Button>Projects</Button>
              </Link>
              <Link to="/dashboard/skillsandexperiance">
                <Button>Skills And Experiance</Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawer1;
