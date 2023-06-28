import { Text } from "@mantine/core";
import Loading from "../web/Loading";
import FullFeed from "./FullFeed";
import { useEffect, useState } from "react";
import { FEED_DEFAULT } from "../../pages/Home/defaultValue";
import { getFeeds, getYourFeed } from "../../apis/articles";

function MainFeed({
  currentTitle,
  currentTag,
  currentAuthor,
  currentFavorited,
}) {
  const [listFeeds, setlistFeeds] = useState(FEED_DEFAULT);
  const [loadingFeed, setLoadingFeed] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoadingFeed(true);
    const getTagNames = async () => {
      let params = {
        limit: 10,
        offset: (page - 1) * 10,
      };
      try {
        let res;
        if (currentTitle === "Your Feed") {
          res = await getYourFeed(page, params);
        } else {
          if (currentTag) {
            params = { ...params, tag: currentTag };
          } else if (currentAuthor) {
            params = { ...params, author: currentAuthor };
          } else if (currentFavorited) {
            params = { ...params, favorited: currentFavorited };
          }
          res = await getFeeds(page, params);
        }
        setlistFeeds(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingFeed(false);
      }
    };
    getTagNames();
  }, [page, currentTag, currentTitle, currentAuthor, currentFavorited]);

  return (
    <>
      {loadingFeed ? (
        <Loading heightValue="50vh" sizeValue="lg" />
      ) : // check xem có feed nào không
      listFeeds.articles?.length > 0 ? (
        <FullFeed
          data={listFeeds}
          setCurrentPage={setPage}
          currentPage={page}
        />
      ) : (
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          No articles are here... yet.
        </Text>
      )}
    </>
  );
}

export default MainFeed;
