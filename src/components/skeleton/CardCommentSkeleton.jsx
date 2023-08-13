import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton,
} from "@chakra-ui/react";

const CardCommentSkeleton = () => {
  return (
    <Card w="300px" my={2}>
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={0}
      >
        <Skeleton height="12px" width="60%" />
        <Skeleton height="12px" width="20%" />
      </CardHeader>
      <CardBody pt={1}>
        <Divider />
        <Skeleton height="12px" mt="2" />
        <Skeleton height="12px" mt="2" width="80%" />
        <Skeleton height="12px" mt="2" width="60%" />
      </CardBody>
    </Card>
  );
};

export default CardCommentSkeleton;
