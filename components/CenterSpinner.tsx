import { Flex, CircularProgress } from "@chakra-ui/react";

const CenterSpinner = ({ color, ...rest }: any) => (
  <Flex justify="center" align="center" h="50vh" {...rest}>
    <CircularProgress isIndeterminate color={color || `${"#1eb6a8"}`} />
  </Flex>
);

export default CenterSpinner;
