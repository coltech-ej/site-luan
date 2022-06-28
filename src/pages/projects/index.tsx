import { Center, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { ProjectsAPI } from "../../api/querys";
import { useQuery } from "@apollo/client";
import { Project } from "../../components/Project";

export function Projects() {
	// eslint-disable-next-line unused-imports/no-unused-vars
	const { loading, error, data } = useQuery(ProjectsAPI);
	const projects = data.data.projects.data;
	console.log(projects);

	/*project.attributes.banner.data.attributes.formats.large.url*/
	const IMAGE_URL =
		"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

	

	return (
		<>
			<Header bgColor="gray.700" position="static" logo={true} />
			<Flex
				bg="white"
				color="gray.700"
				justifyContent="center"
				paddingTop="10"
				paddingBottom="10"
			>
				<Flex direction="column" minW="95%">
					<Center>
						<Flex fontSize="4xl" direction="column" color="gray.500">
							<Center>Projetos</Center>
							<Center margin="-5">
								<Text fontWeight="bold">Arquitetônicos</Text>
							</Center>
						</Flex>
					</Center>
					<Grid templateColumns="repeat(3, 1fr)" marginTop="20" gap="5">
						{
							/*data.map((project) => (
							// eslint-disable-next-line react/jsx-key
							<GridItem bgImage={project.url} bgSize="cover" w="100%" h="22em">
								<Project name={project.name} location={project.location} />
							</GridItem>
						))*/
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							projects.map((project: any) => (
								<GridItem bgImage={IMAGE_URL} bgSize="cover" w="100%" h="22em">
									<Project
										name={project.attributes.name}
										location={project.attributes.basics.location}
									/>
								</GridItem>
							))
						}
					</Grid>
				</Flex>
			</Flex>
			<Footer />
		</>
	);
}
