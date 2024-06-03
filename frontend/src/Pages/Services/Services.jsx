import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCode, FiSettings, FiLayout } from "react-icons/fi";
import Navbar from "../../Components/Navbar";

const servicesData = [
  {
    icon: FiCode,
    title: "Web Development",
    description: "Crafting elegant and efficient websites.",
  },
  {
    icon: FiLayout,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing designs.",
  },
  {
    icon: FiSettings,
    title: "Custom Solutions",
    description: "Building tailored solutions to meet your needs.",
  },
];

const ServiceItem = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      borderRadius="lg"
      p={6}
      bgColor="white"
      textAlign="center"
      transition="all 0.3s ease"
      cursor="pointer"
      maxW="300px"
      mx="auto"
      mb={8}
      boxShadow="lg"
    >
      <Icon as={icon} boxSize={10} color="teal.500" />
      <Text mt={4} fontWeight="bold">
        {title}
      </Text>
      <Text mt={2}>{description}</Text>
    </motion.div>
  );
};

const Services = () => {
  return (
    <Navbar>
      <Flex
        direction="column"
        align="center"
        justify="center"
        mt={20}
        mx={5}
        maxW="1200px"
      
      >
        <Text
          fontSize={{ base: "xl", md: "3xl" }}
          fontWeight="bold"
          color="teal.500"
          textAlign="center"
          mb={8}
        >
         My Services
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          w="100%"
          flexWrap="wrap"
        >
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </Flex>
        <Box
          w={{ base: "90%", md: "50%" }}
          h="300px"
          bgGradient="linear(to-r, teal.400, blue.400)"
          borderRadius="lg"
          mt={{ base: 8, md: 16 }}
          boxShadow="xl"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "2xl",
          }}
        >
          <Flex
            direction="column"
            justify="center"
            align="center"
            h="100%"
            p={8}
          >
            <Text
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              mb={4}
            >
              Creative Services
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="white"
              textAlign="center"
            >
              We provide innovative solutions to help you succeed in the digital
              world.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Navbar>
  );
};

export default Services;
