import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      direction="column" 
      align="center"
    >
      <Header />
    </Flex>
  );
}