/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import { GET_PROJECTS } from "../../api/querys";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export function Projects() {
	const [projects, setProjects] = useState([
		{
			id: "",
			name: "",
			location: "",
			url: "",
		},
	]);
	const { loading, error, data } = useQuery(GET_PROJECTS);

	useEffect(() => {
		if (data) {
			const projectsArray = data.projects.data;
			console.log(projectsArray);
			projectsArray.map((project: any) => {
				const constructer = {
					id: project.id,
					name: project.attributes.name,
					location: project.attributes.basics.location,
					url: project.attributes.banner.data.attributes.formats.large.url,
				};
				console.log(constructer);
				setProjects([...projects, constructer]);
			});
			console.log(projects);
		}
	}, [data]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	/*
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
						))
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							projects.map((project: any) => (
								<GridItem bgImage={project.url} bgSize="cover" w="100%" h="22em">
									<Project
										name={project.name}
										location={project.location}
									/>
								</GridItem>
							))
						}
					</Grid>
				</Flex>
			</Flex>
			<Footer />
		</>
	);*/
}
