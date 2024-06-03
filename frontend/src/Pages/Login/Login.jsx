import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
const {loginWithRedirect} =useAuth0();


  return (
    <div>
     <Button onClick={() => loginWithRedirect()}>
      Login
     </Button>
     

    </div>
  )
}

export default Login