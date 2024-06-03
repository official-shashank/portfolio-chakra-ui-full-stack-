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
  position,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ThreeScene from './ThreeScene'; // Import the Three.js component

const ProjectCard = ({ project }) => {
  return (
    <Center py={6} margin={'auto'} position="relative">
      <ThreeScene style={{position:"relative",zIndex:"100"}} /> {/* Add the Three.js scene here */}
      <Stack
        borderWidth="1px"
        borderRadius={'xl'}
        w={{ base: '90%', md: '540px' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="lg"
        padding={4}
        position="relative" // Ensure the stack is positioned relative to the parent
        zIndex={1} // Ensure the content is above the Three.js scene
      >
        <Flex
          flex={{ base: 1, md: 1 }}
          borderRadius="xl"
          transition="all 0.3s"
          _hover={{
            transform: 'scale(1.05)',
            shadow: 'xl',
          }}
        >
          <Image
            borderRadius="xl"
            objectFit="cover"
            boxSize="100%"
            src={project.imageUrls[0]}
            alt={project.name}
          />
        </Flex>
        <Stack
          flex={{ base: 1, md: 1 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          p={4}
        >
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            fontFamily="body"
            mb={2}
          >
            {project.name}
          </Heading>
          <Text fontWeight={600} color="gray.600" size="sm" mb={4}>
            By: {project.teamMembers.join(', ')}
          </Text>
          <Text color="gray.700" mb={4}>
            {project.description.substring(0, 100)}
          </Text>
          <Stack direction="row" flexWrap="wrap">
            {project.tags.map(tag => (
              <Badge key={tag} colorScheme="blue" mb={2} mr={2}>
                {tag}
              </Badge>
            ))}
          </Stack>
          <Stack direction="row" mt={4} spacing={4}>
            <Button
              fontSize="sm"
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
              as={Link}
              href={project.livePreviewLink}
              _focus={{
                bg: 'blue.500',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              leftIcon={<FaExternalLinkAlt />}
              transition="all 0.3s"
            >
              Live Preview
            </Button>
            <Button
              fontSize="sm"
              rounded="full"
              bg="gray.700"
              color="white"
              _hover={{
                bg: 'gray.800',
              }}
              _focus={{
                bg: 'gray.800',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              leftIcon={<FaExternalLinkAlt />}
              as={Link}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              transition="all 0.3s"
            >
              GitHub
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
