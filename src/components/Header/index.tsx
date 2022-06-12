import { Button, Flex, Icon } from "@chakra-ui/react";
import { ForwardRefComponent } from "framer-motion";
import { ForwardedRef, forwardRef, ForwardRefRenderFunction, Ref, RefAttributes } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { Logotipo } from '../Icons';

interface HeaderProps {
  onOpen(): void;
}

const Header: ForwardRefRenderFunction<HTMLButtonElement, HeaderProps> = (
    { onOpen }: HeaderProps, 
    ref
  ) => {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      w="100%"
      h="32"
      mx="auto"
      p="6"
      align="center"
      justifyContent="space-between"
      position="fixed"
      zIndex={4}
    >
      <Logotipo height="64" width="48"/>
      <Button
        ref={ref}
        variant="unstyled"
        onClick={onOpen}
      >
        <Icon as={AiOutlineMenu} w="6" h="7" color="orange"/>
      </Button>

    </Flex>
  );
}

export default forwardRef(Header);