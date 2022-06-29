/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { GET_PROJECTS } from "../../api/querys";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Flex, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import { Project } from "../../components/Project";

export function Projects() {
	const [projects, setProjects] = useState([]);
	const { loading, error, data } = useQuery(GET_PROJECTS);

	useEffect(() => {
		if (data) {
			const projectsArray = data.projects.data;
			const constructor = projectsArray.map((project: any) => ({
				id: project.id,
				name: project.attributes.name,
				location: project.attributes.basics.location,
				url: "https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				// url: project.attributes.banner.data.attributes.formats.large.url,
			}));
			setProjects(constructor);
		}
	}, [loading]);

	useEffect(() => {
		console.log(projects);
	}, [projects]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

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
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							projects.map((project: any) => (
								<GridItem
									key={project.id}
									bgImage={project.url}
									bgSize="cover"
									w="100%"
									h="22em"
								>
									<Project name={project.name} location={project.location} />
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
