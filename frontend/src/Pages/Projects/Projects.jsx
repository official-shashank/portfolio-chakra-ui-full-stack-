import React, { useState, useEffect } from 'react';
import axios from '../../config/axiosConfig.js'; // Import axios for making HTTP requests

import Navbar from '../../Components/Navbar';
import ProjectCard from './ProjectCard';
import { Box, Button, HStack, Heading, Wrap, WrapItem } from '@chakra-ui/react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/v1/projects/getallprojects');
      setProjects(response.data);
      setFilteredProjects(response.data); // Initially set filtered projects to all projects
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleFilterClick = (tag) => {
    // Filter projects based on the clicked tag
    if (tag === filter) {
      // If the same tag is clicked twice, remove the filter
      setFilteredProjects(projects);
      setFilter('');
    } else {
      const filtered = projects.filter((project) => project.tags && project.tags.includes(tag));
      setFilteredProjects(filtered);
      setFilter(tag);
    }
  };

  return (
    <Navbar>
      <Box>
        <Heading textAlign={'center'} color={'Red'}>
          Projects
        </Heading>
        <Wrap
          width={'100%'}
          spacing={4}
          justify={'center'}
          margin={'1rem'}
        >
          {/* Render filter buttons */}
          {['Websites', 'Web App', 'Mobile App', 'Reactjs', 'Express', 'MongoDb', 'NodeJs'].map((tag) => (
            <WrapItem key={tag}>
              <Button
                colorScheme="teal"
                variant={filter === tag ? 'solid' : 'outline'}
                onClick={() => handleFilterClick(tag)}
                boxShadow={'0 4px 6px rgba(0, 0, 0, 0.1)'}
                _hover={{
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
                }}
                transition={'all 0.2s ease-in-out'}
              >
                {tag}
              </Button>
            </WrapItem>
          ))}
        </Wrap>
        <Wrap justify={'center'} spacing={4} width="100%">
          {/* Map through filtered projects and render ProjectCard components */}
          {filteredProjects.map((project) => (
            <WrapItem key={project.id}>
              <ProjectCard project={project} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Navbar>
  );
}
