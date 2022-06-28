import { BoxProps, Flex, Grid, GridItem, Icon } from "@chakra-ui/react";
import { Fragment } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

import { NavLink } from "../NavLink";

import image from "../../../assets/Logo-Luan-Branco.png";

interface IheaderProps extends BoxProps {
	logo?: boolean;
}

export function Header({ logo, ...rest }: IheaderProps) {
	return (
		<Flex
			as="header"
			maxWidth={1480}
			color="white"
			w="100%"
			h="32"
			mx="auto"
			p="6"
			align="center"
			justifyContent="flex-end"
			position="fixed"
			zIndex={4}
			{...rest}
		>
			{logo ? <Flex bgImage={image} w="140px" h="120px" /> : <Fragment />}
			<Grid gridTemplateColumns={"1fr 1fr 1fr 20px 20px 20px 20px"} gap="4">
				<GridItem>
					<NavLink to="/projects">Projetos</NavLink>
				</GridItem>

				<GridItem>
					<NavLink to="/services">Serviços</NavLink>
				</GridItem>

				<GridItem>
					<NavLink to="/contact">Contato</NavLink>
				</GridItem>

				<GridItem>
					<Flex w="100%" py="2">
						<Icon as={FaInstagram} size={20} alignSelf="center" />
					</Flex>
				</GridItem>

				<GridItem>
					<Flex w="100%" py="2">
						<Icon as={FaFacebook} size={20} />
					</Flex>
				</GridItem>

				<GridItem>
					<Flex w="100%" py="2">
						<Icon as={FaLinkedin} size={20} />
					</Flex>
				</GridItem>

				<GridItem>
					<Flex w="100%" py="2">
						<Icon as={FaYoutube} size={20} />
					</Flex>
				</GridItem>
			</Grid>
		</Flex>
	);
}

Header.defaultProps = {
	logo: false,
};
