import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import '../App.css';


const Navbar = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding={6}
    bg="#FFB933"
    color="white"
    className="Navbar"
    {...props}
  >
    <Box display={{ base: "block", lg: "none" }} onClick={handleToggle}>
      <HamburgerIcon w={6} h={6} />
    </Box>

    <Flex align="center" m={"auto"}>
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        <Text className="Navbar-brand">ButlaWiedzy</Text>
      </Heading>
    </Flex>

    {!isOpen ? 
    <Stack
      direction={{ base: "column", lg: "row" }}
      display={{ base: isOpen ? "block" : "none", lg: "flex" }}
      width={{ base: "full", lg: "auto" }}
      alignItems="center"
      flexGrow={1}
      mt={{ base: 4, lg: 0 }}
      spacing={8}
    >
      <Box>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton 
              as={Button} 
              rightIcon={<ChevronDownIcon />} 
              bg="#FFB933" 
              _expanded={{ bg: "#52517f" }}
              _focus={{bg:"#52517f"}}
              _hover={{bg:"#52517f"}}
              >
              Bilioteczka
            </MenuButton>
            <MenuList bg="#FFB933" color={isOpen ? "#52517f" : "white"} borderColor={isOpen ? "#52517f" : "white"}>
              <MenuItem>Popularnonaukowy asystent</MenuItem>
              <MenuItem>Ksiązki</MenuItem>
              <MenuItem>Artykuły</MenuItem>
              <MenuItem>Ranking portali naukowych</MenuItem>
            </MenuList>
          </>
          )}
        </Menu>
      </Box>
      <Box>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton 
              as={Button} 
              rightIcon={<ChevronDownIcon />} 
              bg="#FFB933" 
              _expanded={{ bg: "#52517f" }}
              _focus={{bg:"#52517f"}}
              _hover={{bg:"#52517f"}}
              >
              Teksty
            </MenuButton>
            <MenuList bg="#FFB933" color={isOpen ? "#52517f" : "white"} borderColor={isOpen ? "#52517f" : "white"}>
              <MenuItem>Popularnonaukowy asystent</MenuItem>
              <MenuItem>Ksiązki</MenuItem>
              <MenuItem>Artykuły</MenuItem>
              <MenuItem>Ranking portali naukowych</MenuItem>
            </MenuList>
          </>
          )}
        </Menu>
      </Box>
      <Box>
        <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton 
              as={Button} 
              rightIcon={<ChevronDownIcon />} 
              bg="#FFB933" 
              _expanded={{ bg: "#52517f" }}
              _focus={{bg:"#52517f"}}
              _hover={{bg:"#52517f"}}
              >
              Blog
            </MenuButton>
            <MenuList bg="#FFB933" color={isOpen ? "#52517f" : "white"} borderColor={isOpen ? "#52517f" : "white"}>
              <MenuItem>Popularnonaukowy asystent</MenuItem>
              <MenuItem>Ksiązki</MenuItem>
              <MenuItem>Artykuły</MenuItem>
              <MenuItem>Ranking portali naukowych</MenuItem>
            </MenuList>
          </>
          )}
        </Menu>
      </Box>
      <Box _hover={{color: "#52517f"}}>
        <Text>Sklepik</Text>
      </Box>
      <Box _hover={{color: "#52517f"}}>
        <Text>Artykuły</Text>
      </Box>
    </Stack>
    : null 
    }

    <Box>
      <IconButton bg="#FFB933" _hover={{bg: "#52517f"}}>
        <SearchIcon w={6} h={6} />
      </IconButton>
    </Box>

  </Flex>
  );
}

export default Navbar;