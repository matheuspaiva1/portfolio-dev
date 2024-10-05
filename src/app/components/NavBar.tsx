/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
} from '@chakra-ui/react';
import { IoMenuOutline } from "react-icons/io5";
import Link from 'next/link'; // Importando o Link do next


const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useState(() => window.innerWidth < 768);

  const navItems = [
    { label: 'Sobre mim', href: '#sobre-mim' },
    { label: 'Projetos', href: '#page-project' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <Box>
      <Flex
        as="nav"
        color="white"
        padding="1.5rem"
        justify="space-between"
        align="center"
      >
        {/* Para telas maiores */}
        {isMobile === false ?
          <Flex display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <Button as="a" variant="ghost">
                  {item.label}
                </Button>
            </a>
            ))}
          </Flex> :
          <IconButton
            aria-label="Open menu"
            icon={<IoMenuOutline />}
            onClick={onOpen}
          />
        }
        {/* Para telas menores */}
        
      </Flex>

      {/* Drawer para navegação móvel */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack spacing={4} mt={8}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  <Button as="a" variant="ghost" onClick={onClose}>
                    {item.label}
                  </Button>
                </a>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
