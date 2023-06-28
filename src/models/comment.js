import { DEFAULT_USER } from "./user";

export const DEFAULT_COMMENT_VALUES = {
  body: "",
};

export const DEFAULT_COMMENT_RESPONSE = {
  id: 0,
  createdAt: "",
  updatedAt: "",
  body: "",
  author: {
    ...DEFAULT_USER,
    following: false,
  },
};
