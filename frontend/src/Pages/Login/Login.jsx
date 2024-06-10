
import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to={"/login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Login;
