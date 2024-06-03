import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from '../../Components/Navbar';
import self from '../../assets/self1.png';
import { FaCode, FaDatabase, FaPalette, FaLightbulb } from 'react-icons/fa';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        as={motion.div}
        whileHover={{ scale: 1.1 }}
        w={12}
        h={12}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
        color={'white'}
        shadow="md"
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={useColorModeValue('gray.800', 'white')}>
        {text}
      </Text>
    </Stack>
  );
};

const FloatingIcon = ({ icon, delay, size, color, position }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay }}
      style={{
        position: 'absolute',
        ...position,
        fontSize: size,
        color: useColorModeValue(color.light, color.dark),
      }}
    >
      {icon}
    </motion.div>
  );
};

const ColorfulBlob = () => {
  return (
    <Box
      as={motion.div}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      position="absolute"
      borderRadius="full"
      bgGradient="linear(to-r, blue.400, teal.400, purple.400)"
      filter="blur(70px)"
      boxSize="300px"
      zIndex={-1}
    />
  );
};

export default function About() {
  return (
    <Navbar>
      <Box position="relative" overflow="hidden" py={12}>
        <Container maxW={'5xl'} position="relative">
          <FloatingIcon
            icon={<FaLightbulb />}
            delay={0}
            size="30px"
            color={{ light: 'yellow.400', dark: 'yellow.600' }}
            position={{ top: '10%', left: '5%' }}
          />
          <FloatingIcon
            icon={<FaCode />}
            delay={1}
            size="25px"
            color={{ light: 'teal.400', dark: 'teal.600' }}
            position={{ top: '60%', right: '5%' }}
          />
          <FloatingIcon
            icon={<FaDatabase />}
            delay={2}
            size="30px"
            color={{ light: 'purple.400', dark: 'purple.600' }}
            position={{ top: '20%', right: '15%' }}
          />
          <FloatingIcon
            icon={<FaPalette />}
            delay={1.5}
            size="35px"
            color={{ light: 'orange.400', dark: 'orange.600' }}
            position={{ bottom: '10%', left: '10%' }}
          />

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={10}
            alignItems="center"
          >
            <Flex justify="center" align="center" position="relative">
              <ColorfulBlob />
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  rounded={'full'}
                  alt={'Shashank Vishwakarma'}
                  src={self}
                  objectFit={'cover'}
                  boxSize={{ base: '250px', md: '400px' }}
                  shadow="xl"
                  border="5px solid white"
                />
              </motion.div>
            </Flex>
            <Stack spacing={6} justify="center">
              <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}
              >
                About Me
              </Text>
              <Heading lineHeight={1.3}>
                Hello, I'm a{' '}
                <Text as="span" color={'blue.400'}>
                  <Typewriter
                    words={['Full Stack Developer', 'Teacher', 'Designer']}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Text>
              </Heading>
              <Text
                color={useColorModeValue('gray.600', 'gray.300')}
                fontSize={'lg'}
              >
                Highly skilled software development professional bringing
                enormous talents for software design, development, and
                integration. Offering advanced knowledge of in-demand
                programming languages. Background in writing code and developing
                software applications.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                  />
                }
              >
                <Feature
                  icon={<FaCode />}
                  iconBg={useColorModeValue('teal.400', 'teal.600')}
                  text={'Web Development'}
                />
                <Feature
                  icon={<FaDatabase />}
                  iconBg={useColorModeValue('purple.400', 'purple.600')}
                  text={'Backend Development'}
                />
                <Feature
                  icon={<FaPalette />}
                  iconBg={useColorModeValue('orange.400', 'orange.600')}
                  text={'UI/UX Design'}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Navbar>
  );
}
