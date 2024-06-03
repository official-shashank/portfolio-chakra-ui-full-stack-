import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBriefcase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaAws,
  FaJava,
  FaPython,
  FaCuttlefish,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiJavascript,
  SiZohocorp,
  SiAuth0,
} from 'react-icons/si';
import {
  DiDjango,
  DiBootstrap,
  DiCss3,
  DiHtml5,
  DiJavascript1,
} from 'react-icons/di';
import { FiDatabase } from 'react-icons/fi';
import { AiFillApi, AiOutlineAntDesign } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Database', icon: FaDatabase },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    period: 'Jan 2020 - Present',
    description: 'Developing and maintaining web applications using React.',
  },
  {
    role: 'Backend Developer',
    company: 'Another Tech Company',
    period: 'Jan 2019 - Dec 2019',
    description: 'Building server-side applications and APIs with Node.js.',
  },
  {
    role: 'Database Administrator',
    company: 'Database Inc.',
    period: 'Jan 2018 - Dec 2018',
    description: 'Managing and optimizing database systems.',
  },
];

const Skills = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.800');
  const timelineLine = useColorModeValue('gray.200', 'gray.700');
  const timelineCircle = useColorModeValue('gray.500', 'gray.400');

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/skills').then(data => {
      console.log('This is skills data', data);
      setSkills(data.data);
    });
    axios.get('http://localhost:5000/api/v1/experiences').then(data => {
      console.log('This is skills data', data);
      setExperience(data.data);
    });
  }, []);
  return (
    <Navbar>
      <Box p={5} bg={bg} minH="100vh">
        <Heading as="h2" mb={5} textAlign="center" color={textColor}>
          Skills & Experience
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mb={10} marginTop={'3rem'}>
          {skills.map((skill, index) => (
            <VStack
              height={'100px'}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              alignItems={'center'}
              justifyContent={'center'}
              key={index}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBg}
              _hover={{ boxShadow: 'xl', transform: 'translateY(-5px)' }}
              // Additional hover effect
            >
              <motion.i
                className={`${skill.icon} fa-lg`}
                style={{ color: textColor, fontSize: '50px' }}
                whileHover={{ rotate: 360 }} // Rotate icon on hover
                transition={{ duration: 0.3 }} // Add transition
              ></motion.i>
              <Text margin={'1.5rem'} fontSize={'20px'}>
                {skill.name}
              </Text>{' '}
              {/* Add text below the icon */}
            </VStack>
          ))}
        </SimpleGrid>

        <Heading as="h3" mb={5} textAlign="center" color={textColor}>
          Experience
        </Heading>
        <Flex direction="column" align="center" position="relative">
          <Box
            position="absolute"
            width="2px"
            bg={timelineLine}
            height="100%"
            left="50%"
            transform="translateX(-50%)"
          />
          {experience.map((exp, index) => (
            <Flex
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              key={index}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBg}
              width={['100%', '45%']}
              mt={5}
              mb={5}
              ml={index % 2 === 0 ? ['0', 'auto'] : ['0', '0']}
              mr={index % 2 !== 0 ? ['0', 'auto'] : ['0', '0']}
              alignItems="center"
              position="relative"
            >
              <Box
                position="absolute"
                top="50%"
                left={index % 2 === 0 ? ['-10px', '-20px'] : 'unset'}
                right={index % 2 !== 0 ? ['-10px', '-20px'] : 'unset'}
                transform="translateY(-50%)"
                bg={timelineCircle}
                width={['15px', '20px']}
                height={['15px', '20px']}
                borderRadius="50%"
              />
              <HStack spacing={5}>
                <Icon as={FaBriefcase} w={8} h={8} color="teal.500" />
                <Box>
                  <Text fontWeight="bold" color={textColor}>
                    {exp.role}
                  </Text>
                  <Text color={textColor}>{exp.company}</Text>
                  <Text fontSize="sm" color={textColor}>
                    {exp.period}
                  </Text>
                  <Text mt={2} color={textColor}>
                    {exp.description}
                  </Text>
                </Box>
              </HStack>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Navbar>
  );
};

export default Skills;
