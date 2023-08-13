import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import useCurrencyFormatter from "../hooks/useCurrencyFormatter";

const CardProduct = ({ urlImage, title, price, link }) => {
  const currencyFormatter = useCurrencyFormatter();

  return (
    <Card maxW="200px">
      <CardBody p={0}>
        <Image src={urlImage} alt={title} borderRadius="lg" />
        <Text fontSize="12px" mx={4} my={2}>
          {title}
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={4}
          my={2}
        >
          <Text color="blue.600" fontSize="12px">
            {currencyFormatter ? currencyFormatter.format(price) : ""}
          </Text>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Text
              color="blue.600"
              bg={"blue.100"}
              px={2}
              py={1}
              borderRadius="lg"
              cursor="pointer"
              fontSize="12px"
            >
              Lihat
            </Text>
          </a>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardProduct;
