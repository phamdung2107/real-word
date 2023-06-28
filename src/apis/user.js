import { POST, GET, PUT } from "./config";

export const login = (data) => {
  return POST("/users/login", { user: data });
};

export const register = (data) => {
  return POST("/users", { user: data });
};

export const getCurrentUser = () => {
  return GET("/user");
};

export const updateCurrentUser = (data) => {
  return PUT("/user", { user: data });
};
