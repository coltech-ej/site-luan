import { Box, Flex, Heading } from "@chakra-ui/react";

interface IShowProjectProps {
  img: string;
  title: string; 
}

export function ShowProject({img, title}: IShowProjectProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      bgImage={img}
      bgSize="cover"
      align="center"
      padding="20"
    >
      <Box 
        w="36"
        justifyContent=""
      >
        <Heading
          textShadow='0.1em 0.1em 0.2em black' 
          textAlign="start"
        >{title}</Heading>
      </Box>
    </Flex>
  );
}