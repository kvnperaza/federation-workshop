import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export default function Nav() {
  return (
    <Box as={Link} to="/">
      <HStack p="4">
        <Logo />
      </HStack>
    </Box>
  );
}
