import { GET, DELETE, POST } from "./config";

// vote hoặc bỏ vote cho một bài viết
export const getProfile = (slug) => GET(`/profiles/${slug}`);

export const followProfile = (slug) => POST(`/profiles/${slug}/follow`);

export const unFollowProfile = (slug) => DELETE(`/profiles/${slug}/follow`);
