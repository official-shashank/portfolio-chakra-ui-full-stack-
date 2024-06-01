import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,

  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,


} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,

} from 'react-icons/fi';

import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Pages/Login/Login';
const LinkItems = [
  { name: 'Home', icon: FiHome, to: '/' },
  { name: 'About', icon: FiTrendingUp, to: '/about' },
  { name: 'Skills', icon: FiTrendingUp, to: '/skills' },
  { name: 'Projects', icon: FiTrendingUp, to: '/projects' },
  { name: 'Contact', icon: FiCompass, to: '/contact' },
  { name: 'Services', icon: FiStar, to: '/services' },
  { name: 'Blogs', icon: FiSettings, to: '/blogs' },
];

const Navbar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Mobile Navigation */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link,index) => (
        
          <NavItem key={index} icon={link.icon} onClick={onClose}>
            <Link to={link.to}>

            {link.name}
            </Link>
          </NavItem>
     
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(()=>{
    console.log("This is isAuthenticatd",isAuthenticated);

  })
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

    

      <HStack spacing={{ base: '0', md: '6' }}>
        <ColorModeSwitcher/>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
         {

          isAuthenticated ? (
            <Avatar
              size="sm"
              name={user.name}
              src={user.picture}
            />
          ):(
           <LoginButton/>
          )
         }
       
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Navbar;
