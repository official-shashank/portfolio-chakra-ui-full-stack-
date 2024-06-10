import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Heading,
 
} from "@chakra-ui/react";
import axios from "../config/axiosConfig"
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("This is inside the function");

    await axios.post("/api/v1/user/login",{email, password}).then((response)=>{
  
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = "/dashboard";

    }).catch((error)=>{
        console.log(error);
    })
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="10"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h2" size="lg" textAlign="center" mb="6">
        Login
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" isLoading={false}>
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
