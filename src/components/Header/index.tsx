import { Flex, Grid, GridItem, Icon, position, Text } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

import { NavLink } from "../NavLink";

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      w="100%"
      h="32"
      mx="auto"
      p="6"
      align="center"
      justifyContent="flex-end"
      position="fixed"
      zIndex={4}
    >
      <Grid gridTemplateColumns={"1fr 1fr 1fr 20px 20px 20px 20px"} gap="4">
        <GridItem>
          <NavLink to="/projects">Projetos</NavLink>
        </GridItem>

        <GridItem>
          <NavLink to="/services">Serviços</NavLink>
        </GridItem>

        <GridItem>
          <NavLink to="/contact">Contato</NavLink>
        </GridItem>

        <GridItem>
          <Flex w="100%" py="2">
            <Icon as={FaInstagram} size={20} alignSelf="center" />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex w="100%" py="2">
            <Icon as={FaFacebook} size={20} />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex w="100%" py="2">
            <Icon as={FaLinkedin} size={20} />
          </Flex>
        </GridItem>

        <GridItem>
          <Flex w="100%" py="2">
            <Icon as={FaYoutube} size={20} />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
