import { Flex, Text } from "@chakra-ui/react";

type propTypes = {
  fieldName: string;
  value: string;
};

export default function DisplayField(props: propTypes) {
  const { fieldName, value } = props;

  return (
    <>
      <Flex>
        <Text fontWeight="bold">{fieldName}: &nbsp;</Text>
        <Text>{value}</Text>
      </Flex>
    </>
  );
}
