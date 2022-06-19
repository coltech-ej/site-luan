import { useState } from "react";

import { Header } from "../../components/Header";

import { Footer } from "../../components/Footer";

import { Flex } from "@chakra-ui/react";

import './styles.css';

import { Swiper } from "swiper/react";

import { Mousewheel, Pagination } from "swiper";

const portFolioItem = [
    {
        img: "https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        title: "Modern House",
        ano: "2021",
        localizacao: "Criciúma / SC",
        areaConstruida: "189",
        areaTotal: "342",
        pavimentos: "1",
        quartos: "3",
        materialidade: "",
        equipe: "",
        imagensLinks: ["https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
        fotografo: ""
    }
]
export function PortfolioItem(portFolioItem){
    return(
        <>
        <Flex
            w="100vw" 
            h="100vh" 
            direction="column" 
            align="center"
            bgImage="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            bgSize="cover"
        >
            <Header/>        
        </Flex>

        <Swiper
            slidesPerView={"auto"}
            direction={"vertical"}
            pagination={{
            clickable: true,
            }}
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            speed={1000}
        >
            <section>
                <div className="item-description">
                    <h1>PROJETO {portFolioItem.title}</h1>
                    <p>ANO - {portFolioItem.ano}</p>
                    <p>LOCALIZAÇÃO - {portFolioItem.localizacao}</p>
                    <p>ÁREA CONSTRUÍDA - {portFolioItem.areaConstruida}m²</p>
                    <p>ÁREA TOTAL - {portFolioItem.areaTotal}m²</p>
                    <p>PAVIMENTOS - {portFolioItem.pavimentos}</p>
                    <p>QUARTOS - {portFolioItem.quartos}</p>
                    <p>MATERIALIDADE - {portFolioItem.materialidade}</p>
                    <p>EQUIPE DE PROJETO - {portFolioItem.equipe}</p>
                    <p>IMAGENS - {portFolioItem.fotografo}</p>
                </div>
                <div className="item-galery">
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    {/* {
                        item.imagensLinks.map(link => (
                            <img src={link}></img>
                        ))
                    } */}
                </div>
            </section>
        </Swiper>
        <Footer/>
        </>
    );
};