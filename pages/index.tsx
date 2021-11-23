import { Flex, Button, Text } from "@chakra-ui/react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";
import { useMsal } from "@azure/msal-react";
import useLogout from "../hooks/useLogout";
import useUserAccount from "../hooks/useUserAccount";
import { useTokenData } from "context/TokenContext";
import authorities from "constants/authorities";

const loginUrl = "/testLogin";
// const registerUrl = "/register";
const clientId = process.env.clientId;

export default function Home() {
  const router = useRouter();
  // const tokenData = useTokenData();
  const { instance } = useMsal();
  console.log({ instance, clientId, signInAuthority: authorities.SIGNIN });
  const isAuthed = useIsAuthenticated();

  // console.log({ tokenData, isAuthed });

  const handleLogout = useLogout();
  const userData = useUserAccount();
  const tokenData = useTokenData();
  const accessToken = tokenData?.accessToken;

  // console.log({ userData, accessToken });
  console.log({ accessToken, userData: userData?.me });

  return (
    <Flex flexDir="column">
      <Flex
        w="100%"
        // bg="tomato"
        bg="gray.300"
        minH="60px"
        align="center"
        justify="space-around"
      >
        <Text fontWeight="bold" fontSize="20px">
          Countries Manager
        </Text>
        <Flex>
          <Button disabled={!isAuthed} onClick={() => handleLogout()} ml={4}>
            Logout
          </Button>
        </Flex>
      </Flex>
      <Flex
        pt={20}
        align="center"
        fontSize="30px"
        bg="#161818"
        h="100vh"
        textColor="#fff"
        flexDir="column"
      >
        <Text>{isAuthed ? "LOGGED IN WOHOOO!!!" : "NOT LOGGED IN"}</Text>
        <Text mt="20px">TEST ROUTES:</Text>
        <Flex textColor="black" justify="space-around" w="50%" mt="30px">
          {/* <Button
            disabled={isAuthed}
            bg="tomato"
            onClick={() => router.push(registerUrl)}
          >
            /register
          </Button> */}
          <Button
            disabled={isAuthed}
            bg="beige"
            onClick={() => router.push(loginUrl)}
          >
            /login
          </Button>
        </Flex>
        {/* <Flex justify="center">
          <Button
            // disabled={isAuthed}
            mt={8}
            mr={5}
            colorScheme="blue"
            onClick={() => router.push(profileUrl)}
          >
            /profile
          </Button>
          <Button
            // disabled={isAuthed}
            colorScheme="orange"
            mt={8}
            onClick={() => router.push(securityUrl)}
          >
            /security
          </Button>
        </Flex> */}
      </Flex>
    </Flex>
  );

  // return (

  // );
}
