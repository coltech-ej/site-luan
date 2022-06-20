import { Flex, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";

type projectProps = {
  name: string;
  location: string;
};

export function Project({ name, location }: projectProps) {
  const [show, setShow] = useState(false);

  return (
    <Flex
      w="100%"
      h="100%"
      position="relative"
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show ? (
        <>
          <Flex
            border="1px solid black"
            padding="5"
            w="80%"
            h="80%"
            direction="column"
            position="absolute"
            zIndex={2}
          >
            <Text fontWeight="bold" fontSize="lg">
              {name}
            </Text>
            <Text fontSize="md">{location}</Text>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            bgColor="white"
            position="absolute"
            opacity="50%"
          />
        </>
      ) : (
        <Fragment />
      )}
    </Flex>
  );
}

Project.defaultProps = {
  name: "Nome do Projeto",
  location: "Localização do Projeto",
};
