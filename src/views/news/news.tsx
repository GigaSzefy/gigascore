import React, { useEffect } from "react";
import NewsComponent from "../../components/newsComponent/newsComponent";
import { useAppDispatch } from "../../app/hooks";
import { getNewsAsync } from "../../slices/news-slice";

const NewsView: React.FC = () => {
  const dispatch = useAppDispatch();
  const getNews = async (): Promise<void> => {
    dispatch(getNewsAsync());
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <NewsComponent />
    </>
  );
};

export default NewsView;
