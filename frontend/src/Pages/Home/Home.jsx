import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,

  Image,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion';
import me from "../../assets/self1.png";

export default function Home() {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const headingColor = useColorModeValue('teal.500', 'teal.300');
  const subheadingColor = useColorModeValue('blue.400', 'blue.300');
  const textColor = useColorModeValue('gray.500', 'gray.400');
  const buttonBgColor = useColorModeValue('orange.400', 'orange.500');
  const buttonHoverBgColor = useColorModeValue('orange.500', 'orange.600');


  const imageAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '../../assets/Shashank Resume.pdf'; // Update with the actual path to your resume file
    link.download = 'Shashank_Vishwakarma_Resume.pdf';
    link.click();
  };

  return (
  <Navbar>
     <Box bg={bgColor} minH="100vh">
    
      <Container maxW={'6xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <motion.div
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={imageAnimation.transition}
            >
              <Image
                src={me}
                boxSize={{ base: '250px', md: '350px' }}
                borderRadius="full"
                objectFit="cover"
                shadow="lg"
                zIndex={1}
              />
            </motion.div>
            <Box
              position="absolute"
              top={-10}
              left={-10}
              zIndex={-1}
              boxSize={'300px'}
              bg={useColorModeValue('teal.100', 'teal.700')}
              rounded="full"
              filter={'blur(100px)'}
            />
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align="center">
            <Heading
              fontWeight={800}
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
              lineHeight={'110%'}
            >
              Hello, My name is <Text as="span" color={headingColor}>Shashank Vishwakarma</Text>
              <br />
              I'm a{' '}
              <Text as="span" color={subheadingColor}>
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
            <Text color={textColor} maxW={'3xl'} fontSize={{ base: 'md', md: 'lg' }}>
              Transforming ideas into engaging digital experiences and building dynamic, responsive, and user-centric web applications.
            </Text>
            <Stack spacing={4} direction={{ base: 'column', md: 'row' }}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={buttonBgColor}
                _hover={{ bg: buttonHoverBgColor }}
                gap={'10px'}
                leftIcon={<FaMailBulk />}
              >
                Connect With Me
              </Button>
              <Button
                colorScheme='blue'
                rounded={'full'}
                px={6}
                gap={'10px'}
                leftIcon={<FaDownload />}
                onClick={handleResumeDownload}
              >
                Resume
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  </Navbar>
  );
}
