import { Box, Container, Heading, Input } from "@chakra-ui/react";

const Header = ({ onSearch, setSearchTerm, searchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <Box
        bg="#7FBCD2"
        borderBottomRadius="50%"
        boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
      >
        <Container maxW="container.xl" py="2">
          <Heading fontWeight="bold" textAlign="center" py="2" color="#E1FFEE">
            Tokopedia Play Clone
          </Heading>
        </Container>
      </Box>
      <Box>
        <Box textAlign="center" py={10}>
          <Heading fontSize={28} fontWeight="bold">
            Cari Video Yang Mau ditonton
          </Heading>
          <Box mt={2}>
            <p className="text-muted text-center">
              Temukan video dengan mudah dan cepat
            </p>
            <Input
              type="text"
              placeholder="Cari Video"
              aria-label="Cari Video"
              name="search"
              size="lg"
              w="75%"
              mx="auto"
              mt={2}
              value={searchTerm}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
