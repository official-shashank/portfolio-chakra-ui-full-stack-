import React from 'react';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = () => {
  return (
    <Center py={6} margin={'auto'} >
      <Stack
        borderWidth="1px"
        borderRadius={'50px'}
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        padding={4}
      >
        <Flex flex={1} bg="blue.200" borderRadius={'100px'}>
          <Image
          borderRadius={'100px'}
            objectFit="cover"
            boxSize="100%"
            src="https://w7.pngwing.com/pngs/309/748/png-transparent-microsoft-project-2010-project-portfolio-management-microsoft-text-logo-microsoft-thumbnail.png"
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize="2xl" fontFamily="body">
            Project Name
          </Heading>
          <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
            By : - Project Team Name
          </Text>
          <Text
            textAlign="center"
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}
          >
            About
            <Link href="#" color="blue.400">
              #tag
            </Link>
            me in your posts
          </Text>
          <Stack align="center" justify="center" direction="row" mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight="400"
            >
              Technology used
            </Badge>
          </Stack>
          <Stack
            width="100%"
            mt="2rem"
            direction="row"
            padding={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              flex={1}
              fontSize="sm"
              rounded="full"
              _focus={{
                bg: 'gray.200',
              }}
              gap={'10px'}
            >
              <FaExternalLinkAlt /> Live Preview
            </Button>
            <a href="www.google.com">
              <Button
                flex={1}
                fontSize="sm"
                rounded="full"
                bg="blue.400"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}
                gap={'10px'}
              >
                <FaExternalLinkAlt /> GitHub
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
