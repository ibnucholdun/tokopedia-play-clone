import {
  Box,
  Skeleton,
  Flex,
  Grid,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDetailVideo,
  postCommentAction,
} from "../../redux/actions/videoActions";
import CardProduct from "../../components/CardProduct";
import CardProductSkeleton from "../../components/skeleton/CardProductSkeleton";
import CardCommentSkeleton from "../../components/skeleton/CardCommentSkeleton";
import CardComment from "../../components/CardComment";

const DetailVideo = () => {
  const dispatch = useDispatch();
  const { video, isLoading } = useSelector((state) => state.video);
  const product = video.products;
  const comments = video.comments;
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getDetailVideo(id));
  }, [dispatch, id]);

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      dispatch(postCommentAction(username, comment, id));
      setUsername("");
      setComment("");
    }
  };
  return (
    <>
      <Grid
        templateAreas={`"nav main aside"`}
        gridTemplateColumns={"3fr 6fr 3fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
        justifyContent="center"
      >
        <Flex
          grid-area="nav"
          bg="gray.200"
          flexDir="column"
          gap={2}
          maxHeight="100vh"
          overflowY="auto"
          p={4}
          alignItems="center"
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <CardProductSkeleton key={index} />
              ))
            : Array.isArray(product)
            ? product.map((item) => (
                <CardProduct
                  key={item.productID}
                  urlImage={item.urlImage}
                  title={item.title}
                  link={item.link}
                  price={item.price}
                />
              ))
            : null}
        </Flex>

        <Flex grid-area="main" justifyContent="center">
          <Grid placeItems="center">
            {isLoading ? (
              <Skeleton width="600px" height="320px" />
            ) : (
              <iframe
                width="600"
                height="320"
                src={video.urlVideo}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </Grid>
        </Flex>

        <Flex
          grid-area="aside"
          bg="gray.200"
          flexDir="column"
          gap={2}
          alignItems="center"
        >
          <Box maxHeight="calc(100vh - 200px)" overflowY={"auto"}>
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <CardCommentSkeleton key={index} />
                ))
              : Array.isArray(comments)
              ? comments.map((item, index) => (
                  <CardComment
                    key={index}
                    username={item.username}
                    time={item.timestamp}
                    comment={item.comment}
                  />
                ))
              : null}
          </Box>
          <Box w="340px" position="fixed" bottom="0" bg="#E1FFEE" p={2}>
            <Box display="flex" flexDir="column" alignItems="center">
              <Input
                bg="white"
                placeholder="Username"
                w="90%"
                fontSize="12px"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                mb={2}
              />
              <Textarea
                bg="white"
                placeholder="Comment"
                w="90%"
                fontSize="12px"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                mb={2}
              />
            </Box>
            <Box display="flex" flexDir="column" alignItems="end" mr={4}>
              <Text
                onClick={handleCommentSubmit}
                colorScheme="teal"
                color="white"
                bg="teal"
                px={2}
                py={1}
                borderRadius="lg"
                cursor="pointer"
                fontSize="12px"
              >
                Submit
              </Text>
            </Box>
          </Box>
        </Flex>
      </Grid>
    </>
  );
};

export default DetailVideo;
