import {
	Box,
	Flex,
	Grid,
	GridItem,
	Heading,
	Text,
	Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface IShowProjectProps {
	img: string;
	title: string;
}

export function ShowProject({ img, title }: IShowProjectProps) {
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
			<Grid templateRows="1fr 1fr 1fr" w="100%" h="100%">
				<GridItem>
					<Flex w="100%" h="100%" align="start"></Flex>
				</GridItem>

				<GridItem>
					<Flex direction="column" textAlign="start">
						<Box w="36">
							<Heading textShadow="0.1em 0.1em 0.2em black" textAlign="start">
								{title}
							</Heading>
						</Box>
						<Text fontSize="lg" textTransform="uppercase" mt="4">
							Projeto Residencial
						</Text>

						<Link
							as={RouterLink}
							to="/portifolio-item"
							color="orange"
							mt="4"
							cursor="pointer"
							_hover={{
								filter: "brightness(150%)",
							}}
						>
							Visualizar projeto
						</Link>
					</Flex>
				</GridItem>

				<GridItem />
			</Grid>
		</Flex>
	);
}
