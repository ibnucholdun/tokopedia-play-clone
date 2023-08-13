import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardVideo = ({ urlImage, title, id }) => {
  return (
    <Link to={`/detail-video/${id}`}>
      <Card maxW="18rem" h="350px" p={0} position="relative">
        <Box
          bgImage={`url(${urlImage})`}
          bgSize="cover"
          bgPosition="center"
          h="100%"
          borderRadius="lg"
        />
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
            <Heading size="sm">{title}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardVideo;
