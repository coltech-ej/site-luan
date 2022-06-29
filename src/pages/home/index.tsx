/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Image } from "@chakra-ui/react";

import { Header } from "../../components/Header";

import { Mousewheel, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Footer } from "../../components/Footer";
import { ShowProject } from "../../components/ShowProject";

import image from "../../../assets/Logo-Luan-Branco.png";
import { useEffect, useState } from "react";
import { GET_HOME } from "../../api/querys";
import { useQuery } from "@apollo/client";

export function Home() {
	const [mainProjects, setMainProjects] = useState([]);
	const { loading, error, data } = useQuery(GET_HOME);

	useEffect(() => {
		if (data) {
			const mainProjectsArray = data.homes.data;
			const constructor = mainProjectsArray.map((project: any) => ({
				id: project.id,
				name: project.attributes.name,
				url: project.attributes.banner.data.attributes.formats.large.url,
			}));
			setMainProjects(constructor);
		}
	}, [loading]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<Flex w="100vw" h="100vh" direction="column" align="center">
			<Header />

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
				<SwiperSlide>
					<Flex w="100%" h="100%" p="8">
						<Image
							src={image}
							alt="Logo do Luan Hayden"
							boxSize="sm"
							objectFit="contain"
						/>
					</Flex>
				</SwiperSlide>
				{
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					mainProjects.map((project: any) => (
						// eslint-disable-next-line react/jsx-key
						<SwiperSlide>
							<ShowProject
								key={project.id}
								img={project.url}
								title={project.name}
							/>
						</SwiperSlide>
					))
				}
				<SwiperSlide
					style={{
						height: "auto",
					}}
				>
					<Footer />
				</SwiperSlide>
			</Swiper>
		</Flex>
	);
}
