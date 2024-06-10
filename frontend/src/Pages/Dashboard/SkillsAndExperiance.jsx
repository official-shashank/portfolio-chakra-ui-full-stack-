import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Grid,
} from '@chakra-ui/react';
import axios from '../../config/axiosConfig.js';
import Navbar from '../../Components/Navbar';

const SkillsAndExperiance = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [formState, setFormState] = useState({ type: '', data: {} });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchSkills = async () => {
    const response = await axios.get('/api/v1/skills');
    setSkills(response.data);
  };

  const fetchExperiences = async () => {
    const token = localStorage.getItem("token");
    if(!token){
     window.location.href = "/dashboard";
      return;
    }
    const response = await axios.get(
      '/api/v1/experiences'
    );
    setExperiences(response.data);
  };

  const handleAddClick = type => {
    setFormState({ type, data: {} });
    onOpen();
  };

  const handleEditClick = (type, item) => {
    setFormState({ type, data: item });
    onOpen();
  };

  const handleDeleteClick = async (type, id) => {
    if (type === 'skill') {
      await axios.delete(`http://localhost:5000/api/v1/skills/${id}`);
      fetchSkills();
    } else {
      await axios.delete(`http://localhost:5000/api/v1/experiences/${id}`);
      fetchExperiences();
    }
  };

  const handleSubmit = async () => {
    const { type, data } = formState;
    if (type === 'skill') {
      if (data._id) {
        await axios.put(
          `http://localhost:5000/api/v1/skills/${data._id}`,
          data
        );
      } else {
        await axios.post('http://localhost:5000/api/v1/skills', data);
      }
      fetchSkills();
    } else {
      if (data._id) {
        await axios.put(
          `http://localhost:5000/api/v1/experiences/${data._id}`,
          data
        );
      } else {
        await axios.post('http://localhost:5000/api/v1/experiences', data);
      }
      fetchExperiences();
    }
    onClose();
  };

  useEffect(() => {
    fetchSkills();
    fetchExperiences();
  }, []);

  return (
    <Navbar>
      <Box p={5}>
        <Button colorScheme="blue" onClick={() => handleAddClick('skill')}>
          Add Skill
        </Button>
        <Button
          colorScheme="green"
          ml={3}
          onClick={() => handleAddClick('experience')}
        >
          Add Experience
        </Button>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={5}>
          <Box>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Icon</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {skills.map(skill => (
                  <Tr key={skill._id}>
                    <Td>{skill.name}</Td>
                    <Td>{skill.icon}</Td>
                    <Td>
                      <Button
                        size="sm"
                        onClick={() => handleEditClick('skill', skill)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDeleteClick('skill', skill._id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Box>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Role</Th>
                  <Th>Company</Th>
                  <Th>Period</Th>
                  <Th>Description</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {experiences.map(exp => (
                  <Tr key={exp._id}>
                    <Td>{exp.role}</Td>
                    <Td>{exp.company}</Td>
                    <Td>{exp.period}</Td>
                    <Td>{exp.description}</Td>
                    <Td>
                      <Button
                        size="sm"
                        onClick={() => handleEditClick('experience', exp)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDeleteClick('experience', exp._id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Grid>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {formState.data._id ? 'Edit' : 'Add'}{' '}
              {formState.type === 'skill' ? 'Skill' : 'Experience'}
            </ModalHeader>
            <ModalBody>
              <FormControl>
                <FormLabel>
                  {formState.type === 'skill' ? 'Name' : 'Role'}
                </FormLabel>
                <Input
                  value={
                    formState.type === 'skill'
                      ? formState.data.name
                      : formState.data.role
                  }
                  onChange={e =>
                    setFormState({
                      ...formState,
                      data: {
                        ...formState.data,
                        [formState.type === 'skill' ? 'name' : 'role']:
                          e.target.value,
                      },
                    })
                  }
                />
              </FormControl>
              {formState.type === 'skill' ? (
                <FormControl mt={4}>
                  <FormLabel>Icon</FormLabel>
                  <Input
                    value={formState.data.icon}
                    onChange={e =>
                      setFormState({
                        ...formState,
                        data: {
                          ...formState.data,
                          icon: e.target.value,
                        },
                      })
                    }
                  />
                </FormControl>
              ) : (
                <>
                  <FormControl mt={4}>
                    <FormLabel>Company</FormLabel>
                    <Input
                      value={formState.data.company}
                      onChange={e =>
                        setFormState({
                          ...formState,
                          data: {
                            ...formState.data,
                            company: e.target.value,
                          },
                        })
                      }
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Period</FormLabel>
                    <Input
                      value={formState.data.period}
                      onChange={e =>
                        setFormState({
                          ...formState,
                          data: {
                            ...formState.data,
                            period: e.target.value,
                          },
                        })
                      }
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Input
                      value={formState.data.description}
                      onChange={e =>
                        setFormState({
                          ...formState,
                          data: {
                            ...formState.data,
                            description: e.target.value,
                          },
                        })
                      }
                    />
                  </FormControl>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleSubmit}>
                {formState.data._id ? 'Update' : 'Add'}
              </Button>
              <Button ml={3} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Navbar>
  );
};

export default SkillsAndExperiance;
