import { Box, Center, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideo, getSearchedVideo } from "../../redux/actions/videoActions";
import CardVideo from "../../components/CardVideo";
import CardVideoSkeleton from "../../components/skeleton/CardVideoSkeleton";
import Header from "../../components/Header";

const HomePage = () => {
  const { video, isLoading } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getVideo());
  }, [dispatch]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(getSearchedVideo(searchTerm));
    } else {
      dispatch(getVideo());
    }
  };

  return (
    <>
      <Header onSearch={handleSearch} setSearchTerm={setSearchTerm} />
      <Box>
        <Container maxW="container.xl" py="2">
          {isLoading ? (
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <CardVideoSkeleton key={index} />
              ))}
            </SimpleGrid>
          ) : Array.isArray(video) && video.length > 0 ? (
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {video.map((item) => (
                <CardVideo
                  key={item.videoID}
                  urlImage={item.urlImageThumbnail}
                  title={item.title}
                  id={item.videoID}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Center fontSize={28} fontWeight="bold">
              Video Tidak Ditemukan
            </Center>
          )}
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
