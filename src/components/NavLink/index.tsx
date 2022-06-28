import { Flex, Text } from "@chakra-ui/react";
import { Link, LinkProps } from "react-router-dom";

interface NavLinkProps extends LinkProps {
	children: string;
	to: string;
}

export function NavLink({ to, children, ...rest }: NavLinkProps) {
	return (
		<Flex w="100%" p="2" _hover={{ borderTop: "2px solid white" }}>
			<Link to={to} {...rest}>
				<Text fontSize="sm" fontWeight="400">
					{children}
				</Text>
			</Link>
		</Flex>
	);
}
