import { Button, Flex } from "@chakra-ui/react";

import useMsalInstance from "hooks/useMsalInstance";
import authorities from "constants/authorities";
import { loginRequest } from "configs/authconfig";

type LoginTypes = "popup" | "redirect";

const Register = () => {
  const instance = useMsalInstance(authorities.BASIC_SIGNUP);

  const handleLogin = (loginType: LoginTypes) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then((res) => console.log({ popUpRes: res }));
    } else if (loginType === "redirect") {
      instance
        .loginRedirect()
        .then((res) => console.log({ redirectRest: res }));
    }
  };

  return (
    <Flex bg="#161818" h="100vh" justify="center">
      <Button mt={10} onClick={() => handleLogin("redirect")}>
        TEST
      </Button>
    </Flex>
  );
};

export default Register;
