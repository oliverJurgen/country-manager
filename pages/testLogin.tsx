import { useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useMsal } from "@azure/msal-react";
import useIsBrowser from "hooks/useIsBrowser";
import CenterSpinner from "components/CenterSpinner";
import { loginRequest } from "configs/authconfig";
import authorities from "constants/authorities";

const TestLogin = () => {
  const { instance } = useMsal() as any;
  const isBrowser = useIsBrowser();

  console.log({ signAuthority: authorities.SIGNIN });

  useEffect(() => {
    if (instance && isBrowser) {
      localStorage.setItem("storedAuthority", authorities.SIGNIN);
      instance.loginRedirect({
        ...loginRequest,
        authority: authorities.SIGNIN,
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

export default TestLogin;
