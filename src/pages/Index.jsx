import React from "react";
import { Container, Box, Grid, GridItem, Text, VStack, HStack, Button, Link, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaDocker, FaLink, FaPlay, FaStop, FaSyncAlt, FaMoon, FaSun } from "react-icons/fa";

const containers = [
  {
    name: "web-app",
    params: "PORT=3000",
    logsLink: "#",
    runningCount: 3,
    scalerState: "Auto",
  },
  {
    name: "database",
    params: "DB_HOST=localhost",
    logsLink: "#",
    runningCount: 1,
    scalerState: "Manual",
  },
  {
    name: "cache",
    params: "CACHE_SIZE=256MB",
    logsLink: "#",
    runningCount: 2,
    scalerState: "Auto",
  },
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="container.xl" py={10} bg={bg} color={color}>
      <HStack justifyContent="space-between" mb={6}>
        <Text fontSize="3xl" fontWeight="bold">
          Docker Dashboard
        </Text>
        <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </HStack>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {containers.map((container, index) => (
          <GridItem key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={useColorModeValue("white", "gray.800")}>
            <VStack align="start" spacing={4}>
              <HStack justifyContent="space-between" w="100%">
                <HStack>
                  <FaDocker size="24px" />
                  <Text fontSize="2xl" fontWeight="bold">
                    {container.name}
                  </Text>
                </HStack>
                <HStack>
                  <IconButton aria-label="Start" icon={<FaPlay />} />
                  <IconButton aria-label="Stop" icon={<FaStop />} />
                  <IconButton aria-label="Restart" icon={<FaSyncAlt />} />
                </HStack>
              </HStack>
              <Text>Params: {container.params}</Text>
              <Link href={container.logsLink} color="teal.500" isExternal>
                <HStack>
                  <FaLink />
                  <Text>View Logs</Text>
                </HStack>
              </Link>
              <Text>Running Instances: {container.runningCount}</Text>
              <Text>Scaler State: {container.scalerState}</Text>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
