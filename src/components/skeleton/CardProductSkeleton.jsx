import { Card, CardBody, Image, Text, Box, Skeleton } from "@chakra-ui/react";

function CardProductSkeleton() {
  return (
    <Card w="200px" h="300px">
      <CardBody p={0}>
        <Skeleton height="200px" borderRadius="lg" />
        <Skeleton height="12px" mt={2} mx={4} />
        <Skeleton height="12px" width="60%" mt={2} mx={4} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={4}
          my={2}
        >
          <Skeleton height="12px" width="40%" />
          <Skeleton height="24px" width="40%" />
        </Box>
      </CardBody>
    </Card>
  );
}

export default CardProductSkeleton;
