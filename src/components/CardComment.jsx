import { Card, CardBody, CardHeader, Divider, Text } from "@chakra-ui/react";
import useIndonesianDateFormatter from "../hooks/useIndonesianDateFormatter";

const CardComment = ({ username, time, comment }) => {
  const dateFormatter = useIndonesianDateFormatter();
  return (
    <Card w="300px" my={2}>
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={0}
      >
        <Text fontSize="12px" fontWeight="semibold" textTransform="PascalCase">
          {username}
        </Text>
        <Text fontSize="12px" fontWeight="light" color="gray.500">
          {dateFormatter ? dateFormatter.format(new Date(time)) : ""}
        </Text>
      </CardHeader>
      <CardBody pt={1}>
        <Divider />
        <Text pt="2" fontSize="12px" fontWeight="normal">
          {comment}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CardComment;
