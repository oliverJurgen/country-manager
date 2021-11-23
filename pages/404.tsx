import { Flex, Button, Heading, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

const PageNotFound = () => {
  const router = useRouter();

  return (
    <Flex flexDir="column" justify="center" align="center" minH="80vh">
      <Flex
        align="center"
        onClick={() => {
          router.push("/");
        }}
        mb={8}
      >
        <Icon as={BiArrowBack} fontSize="24px" />
        <Button ml={4} variant="link" colorScheme="blue">
          Home
        </Button>
      </Flex>
      <Heading>404 Page Not Found</Heading>
    </Flex>
  );
};

export default PageNotFound;
