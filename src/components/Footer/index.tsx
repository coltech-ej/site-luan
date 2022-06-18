import { Divider, Flex, Grid, GridItem, Heading, Icon, Image, Text } from "@chakra-ui/react";
import { Logotipo } from "../Icons";
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import coltech from '../../../assets/capa_coltech_laranja_cinza.png';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <Flex
      direction="column"
      as="footer"
      w="100%"
    >
    <Flex>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="5"
        my="12"
        mx="auto"
      >
        <GridItem>
          <Flex>
            <Logotipo w="100%" h="100%"/>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex
            direction="column"
            textAlign="left"
          >
            <Text fontSize="2xl" fontWeight="medium">Contato</Text>

            <Text
              fontSize="lg"
              fontWeight="bold"
              mt="5"
            >+55 12 99481-8286</Text>

            <Text
              fontSize="lg"
              color="gray.300"
              mt="5"
            >Ficou alguma dúvida?</Text>
            <Text
              fontSize="lg"
              fontWeight="bold"
            >robertgs3011@gmail.com</Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex
            direction="column"
            textAlign="left"
          >
            <Text fontSize="2xl" fontWeight="medium">Endereço</Text>

            <Text
              fontSize="lg"
              color="gray.300"
              mt="5"
            >
              Rodovia Dr.Antônio Luiz Moura Gonzaga, 3339 - Sala 105C
            </Text>
            <Text
              fontSize="lg"
              color="gray.300"
            >
              Multi Open Shopping - Rio Tavares, Florianópolis/SC CEP 88048301
            </Text>

            <Text
              fontSize="lg"
              fontWeight="bold"
              mt="5"
            >
              Seg - Sex: 8h às 18h
            </Text>
            
          </Flex>
        </GridItem>

        <GridItem>
          <Flex>
            <Text fontSize="2xl" fontWeight="medium">Certificações</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
    <Flex
      w="100%"
      borderTop="1px"
      borderTopColor="gray.500"
      py="4"
      px="8"
      justify="space-between"
    >
      <Flex>
        <Icon as={AiOutlineCopyrightCircle} fontSize="1rem" mr="0.5" color="gray.300"/> 
        <Text
          fontSize="xs"
          fontWeight="400"
          color="gray.400"
        >2022 Luan Hayder. All Rights Reserved</Text>
      </Flex>
      <Flex
        direction="column"
      >
        <Text
          fontSize="xs"
          fontWeight="400"
          color="gray.400"
          textAlign="left"
        >Desenvolvido por:</Text>
        
        <Image src={coltech} alt="Coltech" w="32" h="12"/> 
      </Flex>
    </Flex>
    </Flex>
  );
}