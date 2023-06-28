import { DEFAULT_USER } from "./user";

export const DEFAULT_ARTICLE = {
  title: "",
  description: "",
  body: "",
  tagList: [],
};

export const DEFAULT_ARTICLE_RESPONSE = {
  slug: "",
  ...DEFAULT_ARTICLE,
  createdAt: "",
  updatedAt: "",
  favorited: false,
  favoritesCount: 0,
  author: {
    ...DEFAULT_USER,
    following: false,
  },
};
