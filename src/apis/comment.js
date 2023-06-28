import { POST, DELETE, GET } from "./config";

export const getComments = (slug) => GET(`/articles/${slug}/comments`);

export const postComment = (slug, body) =>
  POST(`/articles/${slug}/comments`, { comment: { body } });

export const deleteComment = (slug, id) =>
  DELETE(`/articles/${slug}/comments/${id}`);
