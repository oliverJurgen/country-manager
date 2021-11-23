import { useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useMsal } from "@azure/msal-react";
import CenterSpinner from "components/CenterSpinner";
import { loginRequest } from "configs/authconfig";
import authorities from "constants/authorities";
import useIsBrowser from "hooks/useIsBrowser";

const Register = () => {
  const { instance } = useMsal() as any;
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (instance && isBrowser) {
      localStorage.setItem("storedAuthority", authorities.SIGNUP);
      instance.loginRedirect({
        ...loginRequest,
        authority: authorities.SIGNUP,
      });
    }
  }, [instance, isBrowser]);

  return (
    <Flex h="100vh" justify="center" align="center">
      <Text mr={4}> Redirecting Please Wait...</Text>
      <CenterSpinner />
    </Flex>
  );
};

export default Register;
