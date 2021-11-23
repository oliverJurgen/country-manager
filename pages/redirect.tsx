import { useEffect } from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";

import { CenterSpinner } from "components";
import { useTokenData } from "context/TokenContext";

const Redirect = () => {
  const router = useRouter();
  const isAuthed = useIsAuthenticated();
  const tokenData = useTokenData();
  const accessToken = tokenData?.accessToken;

  useEffect(() => {
    if (isAuthed && accessToken) {
      router.push("/");
    }
  }, [isAuthed, router, accessToken]);

  return (
    <Flex h="100vh" justify="center" align="center">
      <Text mr={4}> Redirecting Please Wait...</Text>
      <CenterSpinner />
    </Flex>
  );
};

export default Redirect;
