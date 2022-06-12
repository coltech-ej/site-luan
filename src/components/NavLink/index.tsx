import { Flex, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

interface NavLinkProps {
  children: string;
  href: string;
}

export function NavLink({href, children, ...rest}: NavLinkProps) {
  return (
    <Flex
      w="100%"
      borderTop="1px"
      borderTopColor="gray.600"
      py="2"
    >
      <Link to={href}>
        <Text fontWeight="medium">
          {children}
        </Text>
      </Link> 
    </Flex>
  );
}
