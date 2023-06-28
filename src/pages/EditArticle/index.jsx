import { Container, Flex, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { DEFAULT_ARTICLE_RESPONSE } from "../../models/article";
import { getFeed, updateArticle } from "../../apis/articles";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/web/Loading";
import FormArticle from "../../components/FormArticle";

function EditArticle() {
  document.title = "Edit Article";
  const navigate = useNavigate();

  const [noti, setNoti] = useState("");
  const [loading, setLoading] = useState(true);
  const [onSubmit, setOnSubmit] = useState(false);

  const [article, setArticle] = useState(DEFAULT_ARTICLE_RESPONSE);

  const { postId } = useParams();

  // use effect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFeed(postId || "");
        setArticle(response.data.article);
      } catch (error) {
        navigate("/404", { replace: true });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate, postId]);

  const handleSubmit = async (formData) => {
    setOnSubmit(true);
    try {
      const respone = await updateArticle(postId || "", formData);
      setArticle(respone.data.article);
      navigate(`/edit/${respone.data.article.slug}`, { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setNoti("Update article success");
      setOnSubmit(false);
    }
  };

  // đợi 5s thì xóa noti
  useEffect(() => {
    if (noti) {
      setTimeout(() => {
        setNoti("");
      }, 5000);
    }
  }, [noti]);

  return (
    <Container mt="1rem">
      {loading ? (
        <Loading sizeValue="lg" heightValue="300px" />
      ) : (
        <Flex direction="column" align="center">
          <Title order={1} size="2.5rem" weight={400} mb="0.5rem">
            New Article
          </Title>
          <Text size="lg" mb="1rem" color="green">
            {noti}
          </Text>
          <FormArticle
            article={article}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </Flex>
      )}
    </Container>
  );
}

export default EditArticle;
