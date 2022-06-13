import { Flex, Text } from "@chakra-ui/react";
import { Link, LinkProps } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  children: string;
  to: string;
  final?: boolean
}

export function NavLink({to, children, final = false, ...rest}: NavLinkProps) {
  return (
    <Flex
      w="100%"
      borderTop="1px"
      borderTopColor="gray.600"
      borderBottom={final ? "1px": "0px"}
      borderBottomColor={final ? "gray.600": ""}
      py="2"
    >
      <Link to={to} {...rest}>
        <Text
          fontSize="sm" 
          fontWeight="400"
        >
          {children}
        </Text>
      </Link> 
    </Flex>
  );
}
