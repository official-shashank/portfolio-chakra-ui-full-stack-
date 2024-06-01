import React, { useState } from 'react';

import Navbar from '../../Components/Navbar';
import ProjectCard from './ProjectCard';
import { Box, Button, HStack, Heading } from '@chakra-ui/react';

export default function Projects() {
  const [filter,setFilter]=useState(false);
  
  const handleFilterClick=()=>{
    setFilter(!filter);
  }

  return (
    <Navbar>
      <Box>
        <Heading textAlign={'center'} color={'Red'}>
          Projects
        </Heading>
        <HStack width={'100%'} flexWrap={'nowrap'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'1rem'} margin={'1rem'}>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
         Websites
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
           Web App
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
          Mobile App
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
         Reactjs
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
        Express
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
       MongoDb
          </Button>
          <Button colorScheme="teal" variant={filter ? "solid" : "outline"} onClick={handleFilterClick}>
       NodeJs
          </Button>
        </HStack>
        <HStack
          flexWrap="wrap"
          justifyContent="space-between"
          width="100%"
          spacing={4}
        >
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </HStack>
      </Box>
    </Navbar>
  );
}
