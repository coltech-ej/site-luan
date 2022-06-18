import { Box, Flex, Grid, GridItem, Heading, Icon, Image } from "@chakra-ui/react";

import { Logotipo } from "../Icons";

interface IShowProjectProps {
  img: string;
  title: string; 
}

export function ShowProject({img, title}: IShowProjectProps) {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      bgImage={img}
      bgSize="cover"
      px="20"
      py="4"
    >
      <Grid
        templateRows="1fr 1fr"
        w="100%"
        h="100%"
      >
        <GridItem>
          <Flex
            w="100%"
            h="100%"
            align="start"
          >
            <Logotipo w="48" h="24" color="gray.900"/> 
          </Flex>
        </GridItem>

        <GridItem>
          <Box 
            w="36"
          >
            <Heading
              textShadow='0.1em 0.1em 0.2em black' 
              textAlign="start"
            >{title}</Heading>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}