import { Card, CardBody, Stack, Skeleton } from "@chakra-ui/react";

function CardVideoSkeleton() {
  return (
    <Card maxW="18rem" h="350px" p={0} position="relative">
      <Skeleton h="100%" borderRadius="lg" />
      <CardBody
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0, 0, 0, 0.6)"
        color="white"
        p="2"
        textAlign="center"
      >
        <Stack mt="6" spacing="">
          <Skeleton height="16px" width="80%" mx="auto" />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardVideoSkeleton;
