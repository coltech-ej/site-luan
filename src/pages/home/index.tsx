import { 
  Flex, 
} from "@chakra-ui/react";

import { Header } from "../../components/Header";

import { Mousewheel, Pagination } from "swiper";

import { Swiper, SwiperSlide, } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "../../components/NavLink";
import { Footer } from "../../components/Footer";
import { ShowProject } from "../../components/ShowProject";

export function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      direction="column" 
      align="center"
    >
      <Header/>

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
          <ShowProject 
            img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Modern House"
          />
        </SwiperSlide>
        
        <SwiperSlide>
          <ShowProject 
            img="https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Florest House"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ShowProject 
            img="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Winter House"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}