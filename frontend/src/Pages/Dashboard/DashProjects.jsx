import React, { useState, useEffect } from 'react';
import axios from '../../config/axiosConfig.js';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import Select from 'react-select';
import Navbar from '../../Components/Navbar';

const teamMemberOptions = [
  { value: 'Shashank Vishwakarma', label: 'Shashank Vishwakarma' },
  { value: 'Chandan Gupta', label: 'Chandan Gupta' },
  { value: 'Shobhnath', label: 'Shobhnath' },
  { value: 'Peter', label: 'Peter' },
  { value: 'Somya', label: 'Somya' },
  { value: 'Rishi', label: 'Rishi' },
  { value: 'Krishna', label: 'Krishna' },
  // Add more team members here
];
const tagOptions = [
  // Frontend Technologies
  { value: 'React', label: 'React' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Svelte', label: 'Svelte' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Sass', label: 'Sass' },
  { value: 'Less', label: 'Less' },
  { value: 'Tailwind CSS', label: 'Tailwind CSS' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'Material-UI', label: 'Material-UI' },
  { value: 'Chakra UI', label: 'Chakra UI' },

  // JavaScript Frameworks and Libraries
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'jQuery', label: 'jQuery' },
  { value: 'D3.js', label: 'D3.js' },

  // Backend Technologies
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Express.js', label: 'Express.js' },
  { value: 'Koa', label: 'Koa' },
  { value: 'NestJS', label: 'NestJS' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Django', label: 'Django' },
  { value: 'Flask', label: 'Flask' },
  { value: 'ASP.NET', label: 'ASP.NET' },
  { value: 'Spring Boot', label: 'Spring Boot' },
  { value: 'Laravel', label: 'Laravel' },
  { value: 'Phoenix', label: 'Phoenix' },

  // Databases
  { value: 'MySQL', label: 'MySQL' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'SQLite', label: 'SQLite' },
  { value: 'Redis', label: 'Redis' },
  { value: 'Cassandra', label: 'Cassandra' },
  { value: 'Elasticsearch', label: 'Elasticsearch' },
  { value: 'MariaDB', label: 'MariaDB' },
  { value: 'Oracle', label: 'Oracle' },

  // DevOps and Cloud
  { value: 'Docker', label: 'Docker' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'AWS', label: 'AWS' },
  { value: 'Azure', label: 'Azure' },
  { value: 'Google Cloud', label: 'Google Cloud' },
  { value: 'Terraform', label: 'Terraform' },
  { value: 'Ansible', label: 'Ansible' },
  { value: 'Jenkins', label: 'Jenkins' },
  { value: 'GitHub Actions', label: 'GitHub Actions' },
  { value: 'CircleCI', label: 'CircleCI' },

  // Programming Languages
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'Go', label: 'Go' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Dart', label: 'Dart' },
  { value: 'R', label: 'R' },
  { value: 'Scala', label: 'Scala' },

  // Other Tools and Technologies
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'REST API', label: 'REST API' },
  { value: 'gRPC', label: 'gRPC' },
  { value: 'WebSockets', label: 'WebSockets' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'OAuth', label: 'OAuth' },
  { value: 'JWT', label: 'JWT' },
  { value: 'WebAssembly', label: 'WebAssembly' },
  { value: 'Webpack', label: 'Webpack' },
  { value: 'Babel', label: 'Babel' },
  { value: 'ESLint', label: 'ESLint' },
  { value: 'Prettier', label: 'Prettier' },
  { value: 'Jest', label: 'Jest' },
  { value: 'Mocha', label: 'Mocha' },
  { value: 'Chai', label: 'Chai' },
  { value: 'Cypress', label: 'Cypress' },
  { value: 'Puppeteer', label: 'Puppeteer' },
  { value: 'Selenium', label: 'Selenium' },
  { value: 'Apache Kafka', label: 'Apache Kafka' },
  { value: 'RabbitMQ', label: 'RabbitMQ' },
  { value: 'Nginx', label: 'Nginx' },
  { value: 'Apache', label: 'Apache' },
  { value: 'Vagrant', label: 'Vagrant' },
  { value: 'Chef', label: 'Chef' },
  { value: 'Puppet', label: 'Puppet' },
  { value: 'Splunk', label: 'Splunk' },
  { value: 'New Relic', label: 'New Relic' },
  { value: 'Prometheus', label: 'Prometheus' },
  { value: 'Grafana', label: 'Grafana' },
  { value: 'Tableau', label: 'Tableau' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Sketch', label: 'Sketch' },
  { value: 'Adobe XD', label: 'Adobe XD' },
  { value: 'InVision', label: 'InVision' },
];

const techOptions = [
  // Frontend Technologies
  { value: 'React', label: 'React' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Svelte', label: 'Svelte' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Sass', label: 'Sass' },
  { value: 'Less', label: 'Less' },
  { value: 'Tailwind CSS', label: 'Tailwind CSS' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'Material-UI', label: 'Material-UI' },
  { value: 'Chakra UI', label: 'Chakra UI' },

  // JavaScript Frameworks and Libraries
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'jQuery', label: 'jQuery' },
  { value: 'D3.js', label: 'D3.js' },

  // Backend Technologies
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Express.js', label: 'Express.js' },
  { value: 'Koa', label: 'Koa' },
  { value: 'NestJS', label: 'NestJS' },
  { value: 'Ruby on Rails', label: 'Ruby on Rails' },
  { value: 'Django', label: 'Django' },
  { value: 'Flask', label: 'Flask' },
  { value: 'ASP.NET', label: 'ASP.NET' },
  { value: 'Spring Boot', label: 'Spring Boot' },
  { value: 'Laravel', label: 'Laravel' },
  { value: 'Phoenix', label: 'Phoenix' },

  // Databases
  { value: 'MySQL', label: 'MySQL' },
  { value: 'PostgreSQL', label: 'PostgreSQL' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'SQLite', label: 'SQLite' },
  { value: 'Redis', label: 'Redis' },
  { value: 'Cassandra', label: 'Cassandra' },
  { value: 'Elasticsearch', label: 'Elasticsearch' },
  { value: 'MariaDB', label: 'MariaDB' },
  { value: 'Oracle', label: 'Oracle' },

  // DevOps and Cloud
  { value: 'Docker', label: 'Docker' },
  { value: 'Kubernetes', label: 'Kubernetes' },
  { value: 'AWS', label: 'AWS' },
  { value: 'Azure', label: 'Azure' },
  { value: 'Google Cloud', label: 'Google Cloud' },
  { value: 'Terraform', label: 'Terraform' },
  { value: 'Ansible', label: 'Ansible' },
  { value: 'Jenkins', label: 'Jenkins' },
  { value: 'GitHub Actions', label: 'GitHub Actions' },
  { value: 'CircleCI', label: 'CircleCI' },

  // Programming Languages
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  { value: 'C++', label: 'C++' },
  { value: 'C#', label: 'C#' },
  { value: 'Go', label: 'Go' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Swift', label: 'Swift' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Dart', label: 'Dart' },
  { value: 'R', label: 'R' },
  { value: 'Scala', label: 'Scala' },

  // Other Tools and Technologies
  { value: 'GraphQL', label: 'GraphQL' },
  { value: 'REST API', label: 'REST API' },
  { value: 'gRPC', label: 'gRPC' },
  { value: 'WebSockets', label: 'WebSockets' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'OAuth', label: 'OAuth' },
  { value: 'JWT', label: 'JWT' },
  { value: 'WebAssembly', label: 'WebAssembly' },
  { value: 'Webpack', label: 'Webpack' },
  { value: 'Babel', label: 'Babel' },
  { value: 'ESLint', label: 'ESLint' },
  { value: 'Prettier', label: 'Prettier' },
  { value: 'Jest', label: 'Jest' },
  { value: 'Mocha', label: 'Mocha' },
  { value: 'Chai', label: 'Chai' },
  { value: 'Cypress', label: 'Cypress' },
  { value: 'Puppeteer', label: 'Puppeteer' },
  { value: 'Selenium', label: 'Selenium' },
  { value: 'Apache Kafka', label: 'Apache Kafka' },
  { value: 'RabbitMQ', label: 'RabbitMQ' },
  { value: 'Nginx', label: 'Nginx' },
  { value: 'Apache', label: 'Apache' },
  { value: 'Vagrant', label: 'Vagrant' },
  { value: 'Chef', label: 'Chef' },
  { value: 'Puppet', label: 'Puppet' },
  { value: 'Splunk', label: 'Splunk' },
  { value: 'New Relic', label: 'New Relic' },
  { value: 'Prometheus', label: 'Prometheus' },
  { value: 'Grafana', label: 'Grafana' },
  { value: 'Tableau', label: 'Tableau' },
  { value: 'Power BI', label: 'Power BI' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Sketch', label: 'Sketch' },
  { value: 'Adobe XD', label: 'Adobe XD' },
  { value: 'InVision', label: 'InVision' },
];

const DashProjects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: '',
    teamMembers: [],
    description: '',
    tags: [],
    technologyUsed: [],
    livePreviewLink: '',
    githubLink: '',
    imageUrls: [],
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/v1/projects/getallprojects');
      const fetchedProjects = response.data.map(project => ({
        ...project,
        technologyUsed: Array.isArray(project.technologyUsed)
          ? project.technologyUsed
          : [],
        imageUrls: Array.isArray(project.imageUrls) ? project.imageUrls : [],
      }));
      setProjects(fetchedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOptions, { name }) => {
    setForm({
      ...form,
      [name]: selectedOptions.map(option => option.value),
    });
  };

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...form.imageUrls];
    newImageUrls[index] = value;
    setForm({
      ...form,
      imageUrls: newImageUrls,
    });
  };

  const handleAddImageUrl = () => {
    setForm({
      ...form,
      imageUrls: [...form.imageUrls, ''],
    });
  };

  const handleRemoveImageUrl = index => {
    const newImageUrls = form.imageUrls.filter((_, i) => i !== index);
    setForm({
      ...form,
      imageUrls: newImageUrls,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editIndex !== null) {
        await axios.put(
          `http://localhost:5000/api/v1/projects/projects/${projects[editIndex]._id}`,
          form
        );
      } else {
        await axios.post(
          'http://localhost:5000/api/v1/projects/projects',
          form
        );
      }
      fetchProjects();
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleEdit = index => {
    setEditIndex(index);
    setForm(projects[index]);
    onOpen();
  };

  const handleDelete = async index => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/projects/projects/${projects[index]._id}`
      );
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const resetForm = () => {
    setForm({
      name: '',
      teamMembers: [],
      description: '',
      tags: [],
      technologyUsed: [],
      livePreviewLink: '',
      githubLink: '',
      imageUrls: [],
    });
    setEditIndex(null);
  };

  const handleModalClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Navbar>
      <Box p={5}>
        <Button
          colorScheme="teal"
          onClick={onOpen}
          leftIcon={<AddIcon />}
          _hover={{ bg: 'teal.400' }}
          animation="all 0.3s ease"
        >
          Add Project
        </Button>
        <Modal isOpen={isOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {editIndex !== null ? 'Edit Project' : 'Add Project'}
            </ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Project Name</FormLabel>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Team Members</FormLabel>
                    <Select
                      isMulti
                      name="teamMembers"
                      value={form.teamMembers.map(member => ({
                        label: member,
                        value: member,
                      }))}
                      onChange={handleSelectChange}
                      options={teamMemberOptions}
                      placeholder="Select team members"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Tags</FormLabel>
                    <Select
                      isMulti
                      name="tags"
                      value={form.tags.map(tag => ({ label: tag, value: tag }))}
                      onChange={handleSelectChange}
                      options={tagOptions}
                      placeholder="Select tags"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Technology Used</FormLabel>
                    <Select
                      isMulti
                      name="technologyUsed"
                      value={form.technologyUsed.map(tech => ({
                        label: tech,
                        value: tech,
                      }))}
                      onChange={handleSelectChange}
                      options={techOptions}
                      placeholder="Select technologies"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Live Preview Link</FormLabel>
                    <Input
                      name="livePreviewLink"
                      value={form.livePreviewLink}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>GitHub Link</FormLabel>
                    <Input
                      name="githubLink"
                      value={form.githubLink}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Image URLs</FormLabel>
                    {form.imageUrls.map((url, index) => (
                      <HStack key={index}>
                        <Input
                          value={url}
                          onChange={e =>
                            handleImageUrlChange(index, e.target.value)
                          }
                          placeholder="Image URL"
                        />
                        <IconButton
                          icon={<DeleteIcon />}
                          onClick={() => handleRemoveImageUrl(index)}
                          aria-label="Remove URL"
                        />
                      </HStack>
                    ))}
                    <Button
                      colorScheme="teal"
                      onClick={handleAddImageUrl}
                      mt={2}
                    >
                      Add Image URL
                    </Button>
                  </FormControl>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="teal"
                  mr={3}
                  type="submit"
                  _hover={{ bg: 'teal.400' }}
                  animation="all 0.3s ease"
                >
                  {editIndex !== null ? 'Update' : 'Add'}
                </Button>
                <Button onClick={handleModalClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

        <Box mt={5} width={'100%'} overflow={'scroll'}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Team Members</Th>
                <Th>Description</Th>
                <Th>Tags</Th>
                <Th>Technology Used</Th>
                <Th>Live Preview</Th>
                <Th>GitHub</Th>
                <Th>Images</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {projects.map((project, index) => (
                <Tr key={index}>
                  <Td>{project.name}</Td>
                  <Td>{project.teamMembers.join(', ')}</Td>
                  <Td>{project.description}</Td>
                  <Td>
                    {project.tags.map((tag, i) => (
                      <Badge key={i} colorScheme="purple" mr={1}>
                        {tag}
                      </Badge>
                    ))}
                  </Td>
                  <Td>
                    {project.technologyUsed.map((tech, i) => (
                      <Badge key={i} colorScheme="blue" mr={1}>
                        {tech}
                      </Badge>
                    ))}
                  </Td>
                  <Td>
                    <a
                      href={project.livePreviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </a>
                  </Td>
                  <Td>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Td>
                  <Td>
                    {project.imageUrls.map((url, i) => (
                      <Tag key={i} mr={1} mb={1}>
                        {url}
                      </Tag>
                    ))}
                  </Td>
                  <Td>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => handleEdit(index)}
                      aria-label="Edit"
                      colorScheme="yellow"
                      mr={2}
                      animation="all 0.3s ease"
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => handleDelete(index)}
                      aria-label="Delete"
                      colorScheme="red"
                      animation="all 0.3s ease"
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Navbar>
  );
};

export default DashProjects;
