import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CurrentUser from "../../components/current-user/current-user.component";
import Feed from "../../components/feed/feed.component";
import Header from "../../components/header/header.component";
import LoadingScreen from "../../components/loading-screen/loading-screen.component";
import { State } from "../../redux/store";

const HomePage = () => {
  const [isLessThan820] = useMediaQuery("(max-width: 820px)");
  const isLoading = useSelector((state: State) => state.posts.isPostsPending);
  return (
    <>
      <Header />
      {!isLoading ? (
        <Box w="100%" minH="100vh" bgColor="#fafafa">
          <Flex>
            <Feed />
            {isLessThan820 ? <></> : <CurrentUser />}
          </Flex>
        </Box>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default HomePage;
