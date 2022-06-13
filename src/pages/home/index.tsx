import { 
  Box, 
  Flex, 
  Heading, 
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Text,
  Divider,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

import Header from "../../components/Header";

import { Mousewheel, Pagination } from "swiper";

import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { NavLink } from "../../components/NavLink";

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      direction="column" 
      align="center"
    >
      <Header ref={btnRef} onOpen={onOpen}/>

      <Swiper
        slidesPerView={1}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        speed={1000}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              >Modern House</Heading>
            </Box>
          </Flex>
        </SwiperSlide>
        
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            bgImage="https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              >Florest House</Heading>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            bgImage="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            bgSize="cover"
            align="center"
            padding="20"
          >
            <Box 
              w="36"
            >
              <Heading
                textShadow='0.1em 0.1em 0.2em black' 
                textAlign="start"
              >Winter House</Heading>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>


      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="gray.700">
          <DrawerCloseButton color="orange"/>
          <DrawerBody
            mt="12"
          >
            <NavLink to="/projects">Projetos</NavLink>
            <NavLink to="/services">Serviços</NavLink>
            <NavLink to="/contacts" final>Contatos</NavLink>

            <Grid
              w="100%"
              templateColumns="repeat(3, 1fr)"
              gap="3"
              mx="auto"
              py="4"
              px="20"
              alignItems="center"
            >
              <GridItem>
                <Flex
                  align="center"
                  justify="center"
                >
                  <Icon as={FaFacebook}/>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex
                  align="center"
                  justify="center"
                >
                  <Icon as={FaInstagram}/>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex
                  align="center"
                  justify="center"
                >
                  <Icon as={FaYoutube}/>
                </Flex>
              </GridItem>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Flex>
  );
}