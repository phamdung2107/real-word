import { POST, DELETE, GET, PUT } from "./config";

// tìm kiếm bài viết
export const getFeeds = (page, params) => GET(`/articles`, params);

export const getYourFeed = (page, params) => GET(`/articles/feed`, params);

export const getFeed = (slug) => GET(`/articles/${slug}`);

// vote hoặc bỏ vote cho một bài viết
export const favoriteArticle = (slug) => POST(`/articles/${slug}/favorite`);

export const unFavoriteArticle = (slug) => DELETE(`/articles/${slug}/favorite`);

// Tạo bài viết mới
export const createArticle = (data) => {
  return POST("/articles", { article: data });
};

// sua bai viet
export const updateArticle = (slug, data) => {
  return PUT(`/articles/${slug}`, { article: data });
};

// Xoa bai viet
export const deleteArticle = (slug) => DELETE(`/articles/${slug}`);
