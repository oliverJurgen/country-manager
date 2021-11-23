import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";

import CenterSpinner from "../components/CenterSpinner";

/* eslint-disable react/display-name */
const withAuthGuard = (Component: any) => (props: any) => {
  const router = useRouter();

  const [authCount, setAuthCount] = useState(0);
  const attemptLimit = 4;
  const isAuthed = useIsAuthenticated();

  const isLoading = !isAuthed;

  useEffect(() => {
    if (authCount > attemptLimit && !isAuthed) {
      router.push("/404");
      return;
    }

    if (!isAuthed) {
      setAuthCount((prev) => prev + 1);
    }
  }, [authCount, isAuthed, router]);

  return isLoading ? (
    <Flex h="100vh" justify="center" align="center">
      <Text mr={4}> Redirecting Please Wait...</Text>
      <CenterSpinner />
    </Flex>
  ) : (
    <Component {...props} />
  );
};

export default withAuthGuard;
